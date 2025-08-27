import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { pricingTiers, getFeatureMatrix } from '@/data/pricing';
import { Check, Crown, Star } from 'lucide-react';

export default function Pricing() {
  const featureMatrix = getFeatureMatrix();

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your wedding. Start free and upgrade as you need more features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name} 
              className={`relative ${
                tier.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'hover:shadow-soft transition-shadow duration-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="mb-4">
                  {tier.name === 'Premium' && <Crown className="w-8 h-8 mx-auto text-wedding-gold mb-2" />}
                  {tier.name === 'Pro' && <Star className="w-8 h-8 mx-auto text-primary mb-2" />}
                  {tier.name === 'Free' && <div className="w-8 h-8 mx-auto mb-2" />}
                </div>
                <CardTitle className="text-2xl font-display">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== '$0' && <span className="text-muted-foreground"> / month</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    tier.popular 
                      ? 'gradient-primary text-white hover:opacity-90' 
                      : tier.name === 'Premium'
                      ? 'bg-wedding-gold text-white hover:bg-wedding-gold/90'
                      : ''
                  }`}
                  variant={tier.popular ? 'default' : tier.name === 'Premium' ? 'default' : 'outline'}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-wedding-cream rounded-lg p-8">
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            Compare All Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-semibold relative">
                    Pro
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-xs z-10">
                      Popular
                    </Badge>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row, index) => (
                  <tr key={index} className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-background/50' : ''}`}>
                    <td className="py-3 px-4 text-sm">{row.feature}</td>
                    <td className="text-center py-3 px-4">
                      {row.free ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">–</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.pro ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">–</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.premium ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">–</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Questions About Pricing?
          </h2>
          <p className="text-muted-foreground mb-6">
            We're here to help you choose the right plan for your wedding.
          </p>
          <Button variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </Layout>
  );
}