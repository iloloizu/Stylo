export interface Stylist {
  id: string;
  name: string;
  bio: string;
  pricing: number; // 1-5 scale
  styles: string[];
  events: string[];
  brands: string[];
  travel: boolean;
  services: Service[];
  portfolio: string[];
  recentBlogPost?: BlogPost;
  location: string;
  rating?: number;
}

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Message {
  id: string;
  stylistId: string;
  stylistName: string;
  preview: string;
  timestamp: string;
  unread: boolean;
}

export const mockStylists: Stylist[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    bio: 'Professional stylist with 8+ years of experience in business and casual styling. Specializing in creating confident, polished looks for every occasion.',
    pricing: 4,
    styles: ['Business Professional', 'Minimalist', 'Business Casual'],
    events: ['Business Casual', 'Interview', 'Corporate Events'],
    brands: ['Theory', 'Banana Republic', 'J.Crew', 'Everlane'],
    travel: true,
    location: 'New York, NY',
    services: [
      {
        id: 's1',
        name: 'Personal Styling Session',
        duration: '2 hours',
        price: '$200',
        description: 'Complete wardrobe consultation and outfit creation',
      },
      {
        id: 's2',
        name: 'Shopping Trip',
        duration: '3 hours',
        price: '$300',
        description: 'Guided shopping experience with personalized recommendations',
      },
      {
        id: 's3',
        name: 'Wardrobe Audit',
        duration: '1.5 hours',
        price: '$150',
        description: 'Comprehensive wardrobe assessment and organization',
      },
    ],
    portfolio: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6'],
    recentBlogPost: {
      id: 'b1',
      title: 'Dos and Don\'ts: Business Casual',
      excerpt: 'Master the art of business casual dressing with these essential tips...',
      content: 'Business casual can be tricky to navigate. Here are my top tips for looking professional while staying comfortable...',
      author: 'Sarah Chen',
      date: '2024-04-20',
      category: 'Style Tips',
      tags: ['Business Casual', 'Professional', 'Style Tips'],
    },
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    bio: 'Streetwear enthusiast and fashion consultant helping clients express their unique style through contemporary urban fashion.',
    pricing: 3,
    styles: ['Streetwear', 'GorpCore', 'Contemporary'],
    events: ['Day Party', 'Club', 'Casual Events'],
    brands: ['Nike', 'Adidas', 'Supreme', 'Palace', 'Carhartt'],
    travel: false,
    location: 'Los Angeles, CA',
    services: [
      {
        id: 's4',
        name: 'Street Style Session',
        duration: '2 hours',
        price: '$150',
        description: 'Urban fashion consultation and outfit styling',
      },
      {
        id: 's5',
        name: 'Brand Consultation',
        duration: '1 hour',
        price: '$100',
        description: 'Expert advice on streetwear brands and trends',
      },
    ],
    portfolio: ['photo7', 'photo8', 'photo9', 'photo10'],
    recentBlogPost: {
      id: 'b2',
      title: 'Summer Style Guide 2024',
      excerpt: 'Stay cool and stylish this summer with our curated recommendations...',
      content: 'Summer is here and it\'s time to update your wardrobe. Here are the hottest trends...',
      author: 'Marcus Johnson',
      date: '2024-04-18',
      category: 'Seasonal',
      tags: ['Summer', 'Trends', 'Streetwear'],
    },
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    bio: 'Luxury fashion consultant specializing in high-end styling for special occasions and red carpet events.',
    pricing: 5,
    styles: ['Old Money', 'Luxury', 'Evening Wear'],
    events: ['Wedding', 'Gala', 'Red Carpet', 'Special Occasions'],
    brands: ['Chanel', 'Dior', 'Gucci', 'Prada', 'Hermès'],
    travel: true,
    location: 'Miami, FL',
    services: [
      {
        id: 's6',
        name: 'Luxury Styling',
        duration: '3 hours',
        price: '$500',
        description: 'High-end styling for special occasions',
      },
      {
        id: 's7',
        name: 'Wedding Styling',
        duration: '4 hours',
        price: '$800',
        description: 'Complete wedding day styling and coordination',
      },
    ],
    portfolio: ['photo11', 'photo12', 'photo13', 'photo14', 'photo15'],
    recentBlogPost: {
      id: 'b3',
      title: 'The Art of Old Money Style',
      excerpt: 'Discover the timeless elegance of old money aesthetics...',
      content: 'Old money style is about understated luxury and timeless elegance...',
      author: 'Elena Rodriguez',
      date: '2024-04-15',
      category: 'Luxury',
      tags: ['Old Money', 'Luxury', 'Timeless'],
    },
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Dos and Don\'ts: Business Casual',
    excerpt: 'Master the art of business casual dressing with these essential tips that will help you look professional while staying comfortable.',
    content: 'Business casual can be one of the most challenging dress codes to navigate. The key is finding the perfect balance between professional and relaxed...',
    author: 'Sarah Chen',
    date: '2024-04-20',
    category: 'Style Tips',
    tags: ['Business Casual', 'Professional', 'Style Tips'],
  },
  {
    id: 'b2',
    title: 'Summer Style Guide 2024',
    excerpt: 'Stay cool and stylish this summer with our curated recommendations for the hottest trends and must-have pieces.',
    content: 'Summer is here and it\'s time to update your wardrobe with fresh, breathable pieces that keep you looking great...',
    author: 'Marcus Johnson',
    date: '2024-04-18',
    category: 'Seasonal',
    tags: ['Summer', 'Trends', 'Streetwear'],
  },
  {
    id: 'b3',
    title: 'The Art of Old Money Style',
    excerpt: 'Discover the timeless elegance of old money aesthetics and how to incorporate these sophisticated elements into your wardrobe.',
    content: 'Old money style is about understated luxury and timeless elegance. It\'s not about flashy logos or trendy pieces...',
    author: 'Elena Rodriguez',
    date: '2024-04-15',
    category: 'Luxury',
    tags: ['Old Money', 'Luxury', 'Timeless'],
  },
  {
    id: 'b4',
    title: 'Building a Capsule Wardrobe',
    excerpt: 'Learn how to create a versatile capsule wardrobe that maximizes your style while minimizing clutter.',
    content: 'A capsule wardrobe is a curated collection of essential pieces that work together to create multiple outfits...',
    author: 'Sarah Chen',
    date: '2024-04-12',
    category: 'Organization',
    tags: ['Capsule Wardrobe', 'Minimalism', 'Organization'],
  },
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    stylistId: '1',
    stylistName: 'Sarah Chen',
    preview: 'Hi! I\'d love to help with your styling needs. When would you like to schedule a consultation?',
    timestamp: '2 hours ago',
    unread: true,
  },
  {
    id: 'm2',
    stylistId: '2',
    stylistName: 'Marcus Johnson',
    preview: 'Thank you for your inquiry about our services. I\'m available next week for a session.',
    timestamp: '1 day ago',
    unread: false,
  },
  {
    id: 'm3',
    stylistId: '3',
    stylistName: 'Elena Rodriguez',
    preview: 'I\'ve reviewed your requirements and would be happy to help with your special occasion styling.',
    timestamp: '3 days ago',
    unread: false,
  },
];

export const styleCategories = [
  'Streetwear',
  'Business Professional',
  'Old Money',
  'GorpCore',
  'Minimalist',
  'Contemporary',
  'Luxury',
  'Evening Wear',
];

export const eventCategories = [
  'Business Casual',
  'Wedding',
  'House Party',
  'Club',
  'Day Party',
  'Interview',
  'Gala',
  'Red Carpet',
  'Special Occasions',
  'Corporate Events',
  'Casual Events',
];

export const popularBrands = [
  'Nike',
  'Adidas',
  'Theory',
  'Banana Republic',
  'J.Crew',
  'Everlane',
  'Supreme',
  'Palace',
  'Carhartt',
  'Chanel',
  'Dior',
  'Gucci',
  'Prada',
  'Hermès',
]; 