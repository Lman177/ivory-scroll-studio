import { Template } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Eye, Star } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  showDetails?: boolean;
}

const packageColors = {
  FREE: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  PRO: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  PREMIUM: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
};

export function TemplateCard({ template, showDetails = false }: TemplateCardProps) {
  return (
    <Card className="group h-full hover:shadow-elegant transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={template.previewImageUrl}
            alt={template.templateName}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {template.featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-wedding-gold text-white">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge className={packageColors[template.requiredPackage]}>
              {template.requiredPackage}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90"
                asChild
              >
                <Link href={`/templates/${template.templateCodeName}`}>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-display text-lg font-semibold mb-2 line-clamp-1">
          {template.templateName}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {template.templateDescription}
        </p>
        
        {showDetails && (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {template.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex space-x-1">
              {template.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gradient-primary text-white hover:opacity-90"
          asChild
        >
          <Link href={`/templates/${template.templateCodeName}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}