import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { TemplateCard } from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templates, categories } from '@/data/templates';
import { Search, Filter, Grid, List } from 'lucide-react';
import { CategoryType, PackageType } from '@/types';

type SortOption = 'popular' | 'newest' | 'alphabetical';

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<PackageType[]>([]);
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
    switch (sortBy) {
      case 'alphabetical':
        filtered.sort((a, b) => a.templateName.localeCompare(b.templateName));
        break;
      case 'newest':
        // For demo purposes, we'll sort by id (assuming newer templates have higher ids)
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'popular':
      default:
        // Featured templates first, then by category
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.category.localeCompare(b.category);
        });
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedPackages, sortBy]);

  const handleCategoryChange = (category: CategoryType, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handlePackageChange = (packageType: PackageType, checked: boolean) => {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Wedding Invitation Templates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our beautiful collection of professionally designed templates. 
            Find the perfect style for your special day.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search templates..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Category</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category as CategoryType)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category as CategoryType, checked as boolean)
                          }
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package Types */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Package</label>
                  <div className="space-y-2">
                    {['FREE', 'PRO', 'PREMIUM'].map((packageType) => (
                      <div key={packageType} className="flex items-center space-x-2">
                        <Checkbox
                          id={packageType}
                          checked={selectedPackages.includes(packageType as PackageType)}
                          onCheckedChange={(checked) => 
                            handlePackageChange(packageType as PackageType, checked as boolean)
                          }
                        />
                        <label htmlFor={packageType} className="text-sm cursor-pointer">
                          {packageType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedTemplates.length} templates found
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            {filteredAndSortedTemplates.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedTemplates.map((template) => (
                  <TemplateCard 
                    key={template.id} 
                    template={template} 
                    showDetails={viewMode === 'list'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No templates found matching your criteria.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}