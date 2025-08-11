import { Template } from '@/types';

export const templates: Template[] = [
  {
    id: "wedding_template_001",
    templateName: "Classic Wedding Invite",
    templateDescription: "A timeless design for wedding invitations with elegant typography and traditional styling.",
    templateCodeName: "CLASSIC_WEDDING",
    previewImageUrl: "http://localhost:8080/api/v1/images/1633f19a-cc7e-4e10-9c2b-d9671bc9772c.webp",
    requiredPackage: "PREMIUM",
    category: "Classic",
    tags: ["elegant", "minimal", "traditional"],
    colors: ["#EDE8E3", "#1F1D1B"],
    demoUrl: "/demo/classic-wedding",
    featured: true
  },
  {
    id: "wedding_template_002",
    templateName: "Modern Minimalist",
    templateDescription: "Clean lines and contemporary design for the modern couple who values simplicity.",
    templateCodeName: "MODERN_MINIMAL",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "PRO",
    category: "Modern",
    tags: ["clean", "contemporary", "minimal"],
    colors: ["#FFFFFF", "#2C2C2C", "#D4AF37"],
    demoUrl: "/demo/modern-minimal",
    featured: true
  },
  {
    id: "wedding_template_003",
    templateName: "Botanical Bliss",
    templateDescription: "Delicate floral illustrations and nature-inspired elements for garden ceremonies.",
    templateCodeName: "BOTANICAL_BLISS",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "PRO",
    category: "Floral",
    tags: ["botanical", "nature", "garden", "flowers"],
    colors: ["#F8F5F1", "#7B8D6B", "#E8C5A0"],
    demoUrl: "/demo/botanical-bliss",
    featured: true
  },
  {
    id: "wedding_template_004",
    templateName: "Simple Elegance",
    templateDescription: "Perfect for couples who believe less is more. Clean typography and subtle accents.",
    templateCodeName: "SIMPLE_ELEGANCE",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "FREE",
    category: "Minimal",
    tags: ["simple", "elegant", "typography"],
    colors: ["#FEFEFE", "#333333"],
    demoUrl: "/demo/simple-elegance"
  },
  {
    id: "wedding_template_005",
    templateName: "Bohemian Dream",
    templateDescription: "Free-spirited design with artistic flourishes and warm earth tones.",
    templateCodeName: "BOHEMIAN_DREAM",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "PRO",
    category: "Boho",
    tags: ["bohemian", "artistic", "free-spirit", "earthy"],
    colors: ["#F4E4BC", "#D2691E", "#8B4513"],
    demoUrl: "/demo/bohemian-dream"
  },
  {
    id: "wedding_template_006",
    templateName: "Luxe Gold & Black",
    templateDescription: "Opulent design with gold foil accents and sophisticated black typography.",
    templateCodeName: "LUXE_GOLD_BLACK",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "PREMIUM",
    category: "Luxury",
    tags: ["luxury", "gold", "sophisticated", "opulent"],
    colors: ["#000000", "#FFD700", "#F5F5DC"],
    demoUrl: "/demo/luxe-gold-black"
  },
  {
    id: "wedding_template_007",
    templateName: "Watercolor Romance",
    templateDescription: "Soft watercolor backgrounds with romantic florals and delicate details.",
    templateCodeName: "WATERCOLOR_ROMANCE",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "PRO",
    category: "Floral",
    tags: ["watercolor", "romantic", "soft", "artistic"],
    colors: ["#FAF0E6", "#DDA0DD", "#FF69B4"],
    demoUrl: "/demo/watercolor-romance"
  },
  {
    id: "wedding_template_008",
    templateName: "Vintage Classic",
    templateDescription: "Inspired by vintage wedding announcements with ornate borders and classic fonts.",
    templateCodeName: "VINTAGE_CLASSIC",
    previewImageUrl: "/api/placeholder/400/600",
    requiredPackage: "FREE",
    category: "Classic",
    tags: ["vintage", "ornate", "classic", "traditional"],
    colors: ["#F5F5DC", "#8B4513", "#2F4F4F"],
    demoUrl: "/demo/vintage-classic"
  }
];

export const categories: string[] = ['Classic', 'Modern', 'Floral', 'Minimal', 'Boho', 'Luxury'];

export const getTemplateByCodeName = (codeName: string): Template | undefined => {
  return templates.find(template => template.templateCodeName === codeName);
};

export const getTemplatesByCategory = (category: string): Template[] => {
  return templates.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): Template[] => {
  return templates.filter(template => template.featured);
};