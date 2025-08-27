import { Layout } from '@/components/Layout';
import { TemplateCard } from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
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

export default function LandingPage() {
  const featuredTemplates = getFeaturedTemplates();
  const blogPosts = getLatestBlogPosts();

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 text-purple-700 bg-purple-100">
                  ✨ New Templates Added Weekly
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                  Beautiful Wedding
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
                    Invitations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create stunning, personalized wedding invitations in minutes. Choose from hundreds of 
                  professionally designed templates and customize every detail to match your perfect day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="px-8 py-3">
                    <Link href="/templates">
                      Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8 py-3">
                    <Link href="#how-it-works">How It Works</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 transform rotate-3">
                  {featuredTemplates.slice(0, 4).map((template, index) => (
                    <div key={template.id} className={`${index % 2 === 0 ? 'mt-8' : ''}`}>
                      <TemplateCard template={template} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Creating your perfect wedding invitation is simple and fun. Follow these easy steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tutorialSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < tutorialSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Templates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Featured Templates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular wedding invitation designs, loved by thousands of couples.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/templates">
                  View All Templates <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Wedding Planning Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get inspired with our latest wedding planning advice and design trends.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Create Your Perfect Invitation?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join over 50,000 couples who have trusted us with their special day.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link href="/templates">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
