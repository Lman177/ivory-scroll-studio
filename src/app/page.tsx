import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
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
    title: 'Premium Quality',
    description: 'High-resolution designs perfect for print and digital'
  }
];

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Create Stunning
              <span className="text-purple-600 block">Invitations & Documents</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our collection of professionally designed templates for weddings, 
              parties, business documents, and more. Customize and download in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-3">
                <Link href="/templates">
                  Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Why Choose Ivory Scroll Studio?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We make it easy to create professional, beautiful documents that make lasting impressions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Ivory Scroll Studio for their important events.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link href="/templates">Start Creating Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
