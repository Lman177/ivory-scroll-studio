import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Palette, Zap, Users, ArrowRight } from 'lucide-react';

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
    title: 'Share Anywhere',
    description: 'Send via email, text, or social media'
  }
];

export default function Home() {
  return (
    <Layout>
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
                <Link to="/templates">
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
                <Link to="/landing">
                  See How It Works
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
            <Link to="/templates">
              Start Creating Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}