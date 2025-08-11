import { Layout } from '@/components/Layout';
import { TemplateCard } from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { getFeaturedTemplates } from '@/data/templates';
import { getLatestBlogPosts } from '@/data/blog';
import { Calendar, ArrowRight, Palette, Share2, CheckCircle } from 'lucide-react';

const tutorialSteps = [
  {
    icon: Palette,
    title: 'Choose a Template',
    description: 'Browse our collection of beautiful, professionally designed templates and find the perfect style for your wedding.'
  },
  {
    icon: CheckCircle,
    title: 'Customize Details',
    description: 'Add your names, wedding date, venue, and personal touches. Customize colors, fonts, and layout to match your vision.'
  },
  {
    icon: Share2,
    title: 'Share Your Invite',
    description: 'Send your stunning invitation via email, text, or social media. Track RSVPs and manage your guest list effortlessly.'
  }
];

export default function Landing() {
  const featuredTemplates = getFeaturedTemplates();
  const blogPosts = getLatestBlogPosts(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-elegant py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Wedding Invitations Made
            <span className="text-wedding-rose block">Simple & Beautiful</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create, customize, and share stunning digital wedding invitations in minutes. 
            No design experience needed.
          </p>
          <Button
            size="lg"
            className="gradient-primary text-white hover:opacity-90 shadow-elegant"
            asChild
          >
            <Link to="/templates">
              Explore Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating your perfect wedding invitation is easier than you think. 
              Follow these simple steps to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorialSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center shadow-soft">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-wedding-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {index < tutorialSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-wedding-rose to-wedding-blush opacity-50" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-20 bg-wedding-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Featured Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular wedding invitation templates, carefully curated 
              for modern couples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/templates">
                View All Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Wedding Planning Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get inspired with our latest tips, trends, and advice for planning 
              your perfect wedding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <CardTitle className="text-xl font-display leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}