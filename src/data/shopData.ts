export interface Shop {
  id: string;
  name: string;
  description: string;
  logo: string;
  coverImage: string;
  location: string;
  rating: number;
  reviewCount: number;
  joinedDate: string;
  categories: string[];
  featured?: boolean;
}

export const shops: Shop[] = [
  {
    id: 'shop1',
    name: 'Kenyan Treasures',
    description: 'Authentic Kenyan handicrafts, textiles, and home decor items made by skilled artisans.',
    logo: 'https://images.pexels.com/photos/5935219/pexels-photo-5935219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/6156383/pexels-photo-6156383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Toronto, ON',
    rating: 4.8,
    reviewCount: 126,
    joinedDate: 'January 2023',
    categories: ['art', 'home', 'textiles'],
    featured: true
  },
  {
    id: 'shop2',
    name: 'Savanna Spices',
    description: 'Authentic Kenyan spices, teas, and gourmet food items imported directly from Kenya.',
    logo: 'https://images.pexels.com/photos/4198234/pexels-photo-4198234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Vancouver, BC',
    rating: 4.6,
    reviewCount: 89,
    joinedDate: 'March 2023',
    categories: ['food', 'spices', 'tea'],
    featured: true
  },
  {
    id: 'shop3',
    name: 'Maasai Designs',
    description: 'Traditional Maasai jewelry, beadwork, and accessories handcrafted by Maasai artisans.',
    logo: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/1447263/pexels-photo-1447263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Calgary, AB',
    rating: 4.9,
    reviewCount: 74,
    joinedDate: 'February 2023',
    categories: ['jewelry', 'accessories', 'clothing'],
    featured: true
  },
  {
    id: 'shop4',
    name: 'Safari Photography',
    description: 'Stunning wildlife photography prints from Kenya\'s national parks and reserves.',
    logo: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Ottawa, ON',
    rating: 4.7,
    reviewCount: 58,
    joinedDate: 'April 2023',
    categories: ['art', 'photography'],
    featured: false
  },
  {
    id: 'shop5',
    name: 'Kikuyu Crafts',
    description: 'Traditional and contemporary crafts influenced by Kikuyu heritage and culture.',
    logo: 'https://images.pexels.com/photos/1342090/pexels-photo-1342090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Montreal, QC',
    rating: 4.5,
    reviewCount: 42,
    joinedDate: 'May 2023',
    categories: ['art', 'home', 'crafts'],
    featured: false
  },
  {
    id: 'shop6',
    name: 'Nairobi Fashions',
    description: 'Modern clothing and accessories with Kenyan-inspired designs and fabrics.',
    logo: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coverImage: 'https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    location: 'Edmonton, AB',
    rating: 4.7,
    reviewCount: 64,
    joinedDate: 'June 2023',
    categories: ['clothing', 'fashion', 'accessories'],
    featured: true
  }
];