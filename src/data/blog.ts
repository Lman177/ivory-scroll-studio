import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: "blog_001",
    title: "10 Essential Tips for Planning Your Dream Wedding",
    excerpt: "From choosing the perfect venue to creating your guest list, discover the secrets to planning a memorable celebration.",
    date: "2024-01-15",
    slug: "essential-tips-planning-dream-wedding"
  },
  {
    id: "blog_002", 
    title: "Digital vs Traditional: Modern Wedding Invitation Trends",
    excerpt: "Explore the latest trends in wedding invitations and discover why digital invitations are becoming the preferred choice.",
    date: "2024-01-10",
    slug: "digital-vs-traditional-wedding-invitations"
  },
  {
    id: "blog_003",
    title: "Color Psychology in Wedding Design: Setting the Perfect Mood",
    excerpt: "Learn how color choices in your wedding stationery can influence the atmosphere and emotions of your special day.",
    date: "2024-01-05", 
    slug: "color-psychology-wedding-design"
  }
];

export const getLatestBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};