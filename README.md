# WeddingInvites - Digital Wedding Invitation Platform

A modern, responsive web platform for creating and managing beautiful digital wedding invitations. Built with React, TypeScript, Tailwind CSS, and featuring elegant wedding-themed design.

## 🎨 Features

- **Beautiful Templates**: 8+ professionally designed templates across 6 categories
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Template Filtering**: Search and filter by category, package type, and tags
- **Pricing Plans**: 3-tier pricing structure (Free, Pro, Premium)
- **Contact System**: Full contact form with validation
- **SEO Optimized**: Semantic HTML, meta tags, and Open Graph support
- **Elegant Design**: Wedding-themed color palette with soft neutrals and elegant typography

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Routing**: React Router Dom
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Inter)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── Header.tsx       # Main navigation
│   ├── Footer.tsx       # Footer with newsletter
│   ├── Layout.tsx       # Page layout wrapper
│   └── TemplateCard.tsx # Template display component
├── data/                # Sample data and utilities
│   ├── templates.ts     # Template data and functions
│   ├── blog.ts          # Blog post data
│   └── pricing.ts       # Pricing tier data
├── pages/               # Route components
│   ├── Home.tsx         # Homepage with hero section
│   ├── Landing.tsx      # Extended landing with tutorials
│   ├── Templates.tsx    # Template browser with filters
│   ├── TemplateDetail.tsx # Individual template details
│   ├── Pricing.tsx      # Pricing comparison table
│   ├── Contact.tsx      # Contact form
│   └── NotFound.tsx     # 404 error page
├── types/               # TypeScript type definitions
└── App.tsx             # Main app component with routing
```

## 🎯 Template System

### Template Categories
- **Classic**: Timeless, traditional designs
- **Modern**: Contemporary, minimalist styles
- **Floral**: Nature-inspired with botanical elements
- **Minimal**: Clean, simple designs
- **Boho**: Free-spirited, artistic styles
- **Luxury**: Opulent designs with premium elements

### Package Types
- **FREE**: Basic templates and features
- **PRO**: Enhanced templates with additional features
- **PREMIUM**: All templates with full feature access

### Adding New Templates

To add a new template to the system:

1. **Add template data** in `src/data/templates.ts`:
```typescript
{
  id: "unique_template_id",
  templateName: "Your Template Name",
  templateDescription: "Description of the template",
  templateCodeName: "TEMPLATE_CODE_NAME",
  previewImageUrl: "/path/to/preview/image.jpg",
  requiredPackage: "FREE" | "PRO" | "PREMIUM",
  category: "Classic" | "Modern" | "Floral" | "Minimal" | "Boho" | "Luxury",
  tags: ["tag1", "tag2", "tag3"],
  colors: ["#color1", "#color2", "#color3"],
  demoUrl: "/demo/template-code-name",
  featured?: true // Optional: mark as featured
}
```

2. **Add preview image** to the public directory or use a CDN URL

3. **Create demo page** (optional) at the specified `demoUrl`

### Adding New Categories

1. Update the `CategoryType` in `src/types/index.ts`
2. Add the new category to the `categories` array in `src/data/templates.ts`
3. Ensure your templates use the new category

## 🎨 Design System

The project uses a comprehensive design system with:

### Colors
- **Primary Colors**: Wedding rose (#D1748F), Wedding blush (#F4D1E1)
- **Neutral Colors**: Wedding cream (#F7F3F0), Wedding charcoal (#3C352E)
- **Accent Colors**: Wedding gold (#D4AF37), Wedding sage (#B8C5A6)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Custom Utilities
- `gradient-primary`: Primary color gradient
- `gradient-elegant`: Elegant background gradient
- `shadow-elegant`: Elegant drop shadow
- `shadow-soft`: Soft drop shadow

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

## 📧 Contact & Support

For questions about the platform or technical support:
- Email: hello@weddinginvites.com
- Phone: +1 (555) 123-4567
- Hours: Mon-Fri, 8am-6pm PST

## 🔧 Customization

### Adding New Pricing Tiers

Update `src/data/pricing.ts` to modify pricing plans and features.

### Customizing Design Theme

Modify design tokens in `src/index.css` and `tailwind.config.ts` to change colors, fonts, and spacing.

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The platform is built with mobile-first responsive design:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## ⚡ Performance

- Optimized images with lazy loading
- Code splitting with React Router
- Efficient re-renders with React optimization patterns
- Lightweight bundle with tree-shaking

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph support
- Structured data ready
- Accessible design with ARIA labels
- Clean, crawlable URLs

---

Built with ❤️ for couples planning their perfect wedding day.