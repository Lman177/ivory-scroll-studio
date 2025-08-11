import { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Basic templates",
      "Single event page", 
      "RSVP form (basic)",
      "Limited media uploads",
      "No custom domain",
      "Email support (standard)"
    ],
    cta: "Get Free"
  },
  {
    name: "Pro",
    price: "$9",
    description: "Most popular for couples",
    features: [
      "All Free features",
      "Pro templates",
      "RSVP with meal choices",
      "Photo gallery",
      "Custom domain",
      "Password-protected invites", 
      "Priority email support"
    ],
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Premium", 
    price: "$19",
    description: "Complete wedding solution",
    features: [
      "All Pro features",
      "Premium templates",
      "Video header support",
      "Advanced analytics",
      "Multi-language invites",
      "White-label branding",
      "Live chat support"
    ],
    cta: "Go Premium"
  }
];

export const allFeatures = [
  "Basic templates",
  "Pro templates", 
  "Premium templates",
  "Single event page",
  "RSVP form (basic)",
  "RSVP with meal choices",
  "Photo gallery",
  "Video header support",
  "Limited media uploads",
  "Advanced analytics",
  "Custom domain",
  "Password-protected invites",
  "Multi-language invites",
  "White-label branding",
  "Email support (standard)",
  "Priority email support",
  "Live chat support"
];

export const getFeatureMatrix = () => {
  return allFeatures.map(feature => ({
    feature,
    free: pricingTiers[0].features.includes(feature) || pricingTiers[0].features.some(f => f.includes(feature.split(' ')[0])),
    pro: pricingTiers[1].features.includes(feature) || pricingTiers[1].features.some(f => f.includes(feature.split(' ')[0]) || f === "All Free features"),
    premium: pricingTiers[2].features.includes(feature) || pricingTiers[2].features.some(f => f.includes(feature.split(' ')[0]) || f === "All Pro features")
  }));
};