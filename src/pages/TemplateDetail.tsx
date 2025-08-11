import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { getTemplateByCodeName } from '@/data/templates';
import { ArrowLeft, Palette, Eye, Heart, Share2, Crown } from 'lucide-react';
import { useState } from 'react';

export default function TemplateDetail() {
  const { codeName } = useParams<{ codeName: string }>();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  
  if (!codeName) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <Link to="/templates">
            <Button>Browse Templates</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const template = getTemplateByCodeName(codeName);

  if (!template) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <Link to="/templates">
            <Button>Browse Templates</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const packageColors = {
    FREE: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    PRO: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    PREMIUM: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  };

  const handleUseTemplate = () => {
    // For demo purposes, show upgrade modal for non-free templates
    if (template.requiredPackage !== 'FREE') {
      setShowUpgradeModal(true);
    } else {
      // Redirect to template editor (stub)
      console.log('Starting template editor...');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/templates">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Templates
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Template Preview */}
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={template.previewImageUrl}
                alt={template.templateName}
                className="w-full rounded-lg shadow-elegant"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <Button
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-white/90"
                  asChild
                >
                  <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Preview
                  </a>
                </Button>
              </div>
            </div>

            {/* Color Palette */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-3">
                  {template.colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-12 h-12 rounded-lg border border-border shadow-sm mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-muted-foreground font-mono">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Template Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">
                    {template.templateName}
                  </h1>
                  <Badge className={`${packageColors[template.requiredPackage]} mb-4`}>
                    {template.requiredPackage} {template.requiredPackage !== 'FREE' && <Crown className="w-3 h-3 ml-1" />}
                  </Badge>
                </div>
                {template.featured && (
                  <Badge className="bg-wedding-gold text-white">
                    <Heart className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {template.templateDescription}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Category</h3>
                  <Badge variant="secondary">{template.category}</Badge>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Template ID</h3>
                  <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                    {template.templateCodeName}
                  </code>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleUseTemplate}
                className="w-full gradient-primary text-white hover:opacity-90 shadow-elegant text-lg py-6"
                size="lg"
              >
                Use This Template
                <Heart className="w-5 h-5 ml-2" />
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Package Requirements */}
            {template.requiredPackage !== 'FREE' && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Crown className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        {template.requiredPackage} Plan Required
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        This template requires a {template.requiredPackage.toLowerCase()} subscription to use.
                      </p>
                      <Button size="sm" asChild>
                        <Link to="/pricing">
                          View Pricing Plans
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Upgrade Modal */}
        <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upgrade Required</DialogTitle>
              <DialogDescription>
                This template requires a {template.requiredPackage.toLowerCase()} plan. 
                Upgrade now to unlock this beautiful template and many more premium features.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <Button className="w-full gradient-primary text-white" asChild>
                <Link to="/pricing">
                  View Pricing Plans
                </Link>
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setShowUpgradeModal(false)}>
                Continue Browsing
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}