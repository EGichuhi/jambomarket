export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'art',
    name: 'Art & Crafts',
    description: 'Handmade art, sculptures, and crafts showcasing Kenyan creativity and tradition.',
    image: 'https://images.pexels.com/photos/3700505/pexels-photo-3700505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 24
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    description: 'Authentic Kenyan teas, coffees, spices, and other culinary delights.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 18
  },
  {
    id: 'clothing',
    name: 'Clothing & Fashion',
    description: 'Traditional and modern Kenyan-inspired fashion and apparel.',
    image: 'https://images.pexels.com/photos/6192603/pexels-photo-6192603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 31
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Accessories',
    description: 'Handcrafted jewelry and accessories featuring traditional Kenyan designs.',
    image: 'https://images.pexels.com/photos/15970285/pexels-photo-15970285/free-photo-of-close-up-of-colorful-beaded-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 15
  },
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Beautiful fabrics, blankets, and textile products showcasing Kenyan craftsmanship.',
    image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 12
  },
  {
    id: 'home',
    name: 'Home & Decor',
    description: 'Unique home decor items to bring a touch of Kenya into your living space.',
    image: 'https://images.pexels.com/photos/6915541/pexels-photo-6915541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 20
  },
  {
    id: 'spices',
    name: 'Spices & Herbs',
    description: 'Authentic Kenyan spices and herbs to enhance your culinary creations.',
    image: 'https://images.pexels.com/photos/4198259/pexels-photo-4198259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 9
  },
  {
    id: 'services',
    name: 'Services',
    description: 'Professional services offered by Kenyan entrepreneurs in Canada.',
    image: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 14
  }
];