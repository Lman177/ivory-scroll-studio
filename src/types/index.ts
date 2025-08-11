export interface Template {
  id: string;
  templateName: string;
  templateDescription: string;
  templateCodeName: string;
  previewImageUrl: string;
  requiredPackage: 'FREE' | 'PRO' | 'PREMIUM';
  category: 'Classic' | 'Modern' | 'Floral' | 'Minimal' | 'Boho' | 'Luxury';
  tags: string[];
  colors: string[];
  demoUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type PackageType = 'FREE' | 'PRO' | 'PREMIUM';
export type CategoryType = 'Classic' | 'Modern' | 'Floral' | 'Minimal' | 'Boho' | 'Luxury';