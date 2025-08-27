'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { templates } from '@/data/templates';
import { ArrowLeft, Palette, Eye, Heart, Share2, Crown } from 'lucide-react';
import { useState } from 'react';

interface PageProps {
  params: {
    codeName: string;
  };
}

export default function TemplateDetailPage({ params }: PageProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  
  const template = templates.find(t => t.templateCodeName === params.codeName);

  if (!template) {
    notFound();
  }

  const handleUseTemplate = () => {
    if (template.requiredPackage !== 'FREE') {
      setShowUpgradeModal(true);
    } else {
      // Handle free template usage
      console.log('Using free template:', template.id);
    }
  };

  const relatedTemplates = templates
    .filter(t => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/templates"
              className="inline-flex items-center text-purple-600 hover:text-purple-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Templates
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Template Preview */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={template.previewImageUrl}
                  alt={template.templateName}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    Preview Full Size
                  </Button>
                </div>
              </div>

              {/* Color Palette */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Color Palette
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {template.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Template Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                    {template.templateName}
                  </h1>
                  <Badge 
                    variant={template.requiredPackage === 'FREE' ? 'secondary' : 'default'}
                    className={template.requiredPackage === 'PREMIUM' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''}
                  >
                    {template.requiredPackage === 'PREMIUM' && <Crown className="h-3 w-3 mr-1" />}
                    {template.requiredPackage}
                  </Badge>
                </div>
                
                <p className="text-lg text-gray-600 mb-4">
                  {template.templateDescription}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline">{template.category}</Badge>
                  {template.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handleUseTemplate}
                >
                  <Palette className="h-5 w-5 mr-2" />
                  Use This Template
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                      High-resolution design files
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                      Customizable text and colors
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                      Print-ready format
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                      Digital sharing options
                    </li>
                    {template.requiredPackage !== 'FREE' && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          Multiple format options
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full" />
                          RSVP tracking system
                        </li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Templates */}
          {relatedTemplates.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Similar Templates
                </h2>
                <p className="text-lg text-gray-600">
                  Explore more templates in the {template.category} category
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedTemplates.map((relatedTemplate) => (
                  <Card key={relatedTemplate.id} className="group cursor-pointer">
                    <Link href={`/templates/${relatedTemplate.templateCodeName}`}>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={relatedTemplate.previewImageUrl}
                          alt={relatedTemplate.templateName}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge 
                          className="absolute top-3 right-3"
                          variant={relatedTemplate.requiredPackage === 'FREE' ? 'secondary' : 'default'}
                        >
                          {relatedTemplate.requiredPackage}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {relatedTemplate.templateName}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedTemplate.templateDescription}
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Upgrade Modal */}
      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-purple-600" />
              Upgrade Required
            </DialogTitle>
            <DialogDescription>
              This template requires a {template.requiredPackage} subscription to use.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Unlock premium features and access to hundreds of exclusive templates.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowUpgradeModal(false)}
              >
                Maybe Later
              </Button>
              <Button className="flex-1" asChild>
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
