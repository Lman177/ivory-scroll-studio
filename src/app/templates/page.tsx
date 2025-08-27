'use client';

import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { TemplateCard } from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templates } from '@/data/templates';
import { Search, Filter, Grid, List } from 'lucide-react';

type SortOption = 'popular' | 'newest' | 'alphabetical';
type CategoryFilterType = 'Classic' | 'Modern' | 'Floral' | 'Minimal' | 'Boho' | 'Luxury';
type PackageFilterType = 'FREE' | 'PRO' | 'PREMIUM';

const categoryOptions: CategoryFilterType[] = ['Classic', 'Modern', 'Floral', 'Minimal', 'Boho', 'Luxury'];
const packageOptions: PackageFilterType[] = ['FREE', 'PRO', 'PREMIUM'];

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryFilterType[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<PackageFilterType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedTemplates = useMemo(() => {
    let filtered = templates.filter((template) => {
      const matchesSearch = 
        template.templateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategories.length === 0 || selectedCategories.includes(template.category);
      
      const matchesPackage = 
        selectedPackages.length === 0 || selectedPackages.includes(template.requiredPackage);
      
      return matchesSearch && matchesCategory && matchesPackage;
    });

    // Sort templates
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id.localeCompare(a.id); // Simple ID-based sorting
        case 'alphabetical':
          return a.templateName.localeCompare(b.templateName);
        case 'popular':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategories, selectedPackages, sortBy]);

  const handleCategoryChange = (category: CategoryFilterType, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handlePackageChange = (packageType: PackageFilterType, checked: boolean) => {
    if (checked) {
      setSelectedPackages([...selectedPackages, packageType]);
    } else {
      setSelectedPackages(selectedPackages.filter(p => p !== packageType));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedPackages([]);
    setSortBy('popular');
  };

  return (
    <Layout>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Wedding Invitation Templates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of beautiful, customizable wedding invitation templates. 
              Find the perfect design for your special day.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Search Templates
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by name or style..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Categories
                    </label>
                    <div className="space-y-2">
                      {categoryOptions.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => 
                              handleCategoryChange(category, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={category}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Types */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Package Types
                    </label>
                    <div className="space-y-2">
                      {packageOptions.map((packageType) => (
                        <div key={packageType} className="flex items-center space-x-2">
                          <Checkbox
                            id={packageType}
                            checked={selectedPackages.includes(packageType)}
                            onCheckedChange={(checked) => 
                              handlePackageChange(packageType, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={packageType}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {packageType}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="text-sm text-gray-600">
                  Showing {filteredAndSortedTemplates.length} of {templates.length} templates
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Templates Grid/List */}
              {filteredAndSortedTemplates.length > 0 ? (
                <div className={
                  viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                }>
                  {filteredAndSortedTemplates.map((template) => (
                    <TemplateCard 
                      key={template.id} 
                      template={template}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No templates found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or clearing filters.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
