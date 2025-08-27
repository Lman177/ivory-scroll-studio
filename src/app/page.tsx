import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Heart, Palette, Zap, Users, ArrowRight, Share2, CheckCircle, Calendar } from 'lucide-react';
import { getLatestBlogPosts } from '@/data/blog';

const features = [
  {
    icon: Palette,
    title: 'Beautiful Templates',
    description: 'Choose from dozens of professionally designed templates'
  },
  {
    icon: Zap,
    title: 'Easy Customization',
    description: 'Personalize colors, fonts, and content in minutes'
  },
  {
    icon: Users,
    title: 'RSVP Management',
    description: 'Track responses and manage your guest list effortlessly'
  },
  {
    icon: Heart,
    title: 'Premium Quality',
    description: 'High-resolution designs perfect for print and digital'
  }
];

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

export default function HomePage() {
  const blogPosts = getLatestBlogPosts(3);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
             <section className="relative gradient-elegant py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-foreground mb-6">
              Create Beautiful Wedding
              <span className="text-wedding-rose block">Invitations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Design stunning digital wedding invitations that capture your love story. 
              Easy to customize, beautiful to share, and loved by couples worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 shadow-elegant text-lg px-8"
                asChild
              >
                <Link href="/templates">
                  Create Your Invitation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <Link href="#how-it-works" className="scroll-smooth">
                  How it works? 
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-wedding-rose/20">
          <Heart className="w-12 h-12 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 text-wedding-rose/20">
          <Heart className="w-8 h-8 animate-pulse animation-delay-1000" />
        </div>
      </section>

        {/* Features Section */}
       <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Everything You Need for Perfect Invitations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to delivery, we've got you covered with powerful features 
              that make creating wedding invitations a joy, not a chore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-wedding-cream">
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

      {/* Wedding Planning Insights Section */}
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
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-wedding-blush">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Ready to Create Your Perfect Invitation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of couples who've created beautiful wedding invitations with our platform.
          </p>
          <Button
            size="lg"
            className="gradient-primary text-white hover:opacity-90 shadow-elegant text-lg px-8"
            asChild
          >
            <Link href="/templates">
              Start Creating Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      </div>
    </Layout>
  );
}
