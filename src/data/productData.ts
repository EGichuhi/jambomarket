export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  shopId: string;
  inStock: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 'product1',
    name: 'Handwoven Kikoi Beach Towel',
    description: 'Traditional Kenyan kikoi cotton towel, perfect for the beach or as a stylish wrap. Handwoven by skilled artisans using traditional techniques.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5560021/pexels-photo-5560021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'textiles',
    shopId: 'shop1',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product2',
    name: 'Kenyan Coffee Beans - Medium Roast',
    description: 'Premium Arabica coffee beans from the highlands of Kenya. Medium roast with notes of blackberry, citrus, and caramel.',
    price: 18.99,
    images: [
      'https://images.pexels.com/photos/20553181/pexels-photo-20553181/free-photo-of-coffee-beans-in-a-coffee-bag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2526451/pexels-photo-2526451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'food',
    shopId: 'shop2',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product3',
    name: 'Maasai Beaded Necklace',
    description: 'Handcrafted beaded necklace made by Maasai women. Each piece tells a story through its colors and patterns.',
    price: 45.99,
    images: [
      'https://images.pexels.com/photos/15970285/pexels-photo-15970285/free-photo-of-close-up-of-colorful-beaded-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/17930061/pexels-photo-17930061/free-photo-of-jewelry-on-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'jewelry',
    shopId: 'shop3',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product4',
    name: 'Kenyan Safari Wildlife Print',
    description: 'Beautiful high-quality print featuring iconic Kenyan wildlife captured in their natural habitat.',
    price: 65.00,
    images: [
      'https://images.pexels.com/photos/5732627/pexels-photo-5732627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6685485/pexels-photo-6685485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'art',
    shopId: 'shop4',
    inStock: true,
    isFeatured: false
  },
  {
    id: 'product5',
    name: 'Kenyan Tea Sampler Set',
    description: 'Collection of premium Kenyan teas including black, green, and herbal varieties. Perfect gift for tea lovers.',
    price: 24.99,
    images: [
      'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'food',
    shopId: 'shop2',
    inStock: true,
    isFeatured: false
  },
  {
    id: 'product6',
    name: 'Hand-carved Wooden Giraffe',
    description: 'Beautifully carved wooden giraffe sculpture made from sustainable African olive wood.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/3700505/pexels-photo-3700505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'art',
    shopId: 'shop1',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product7',
    name: 'African Print Tote Bag',
    description: 'Stylish tote bag made with vibrant African print fabric. Perfect for shopping or as a beach bag.',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5935154/pexels-photo-5935154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'accessories',
    shopId: 'shop6',
    inStock: true,
    isFeatured: false
  },
  {
    id: 'product8',
    name: 'Maasai Shuka Blanket',
    description: 'Traditional red and blue checked Maasai Shuka blanket. Versatile as a throw, picnic blanket, or fashion accessory.',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/3682409/pexels-photo-3682409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11835300/pexels-photo-11835300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'textiles',
    shopId: 'shop3',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product9',
    name: 'Kenyan Spice Mix Set',
    description: 'Collection of authentic Kenyan spice blends perfect for adding unique flavors to your cooking.',
    price: 32.99,
    images: [
      'https://images.pexels.com/photos/4198259/pexels-photo-4198259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'spices',
    shopId: 'shop2',
    inStock: true,
    isFeatured: false
  },
  {
    id: 'product10',
    name: 'Modern Ankara Dress',
    description: 'Contemporary dress made with traditional Ankara fabric, combining African heritage with modern design.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/6192603/pexels-photo-6192603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5816686/pexels-photo-5816686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'clothing',
    shopId: 'shop6',
    inStock: true,
    isFeatured: true
  },
  {
    id: 'product11',
    name: 'Soapstone Heart Bowl',
    description: 'Hand-carved soapstone bowl in a heart shape. Each piece is unique with natural variations in color.',
    price: 28.99,
    images: [
      'https://images.pexels.com/photos/6915521/pexels-photo-6915521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6915541/pexels-photo-6915541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'home',
    shopId: 'shop5',
    inStock: true,
    isFeatured: false
  },
  {
    id: 'product12',
    name: 'Beaded Leather Sandals',
    description: 'Handmade leather sandals adorned with colorful Maasai beadwork. Comfortable and stylish for summer.',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/1447364/pexels-photo-1447364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'accessories',
    shopId: 'shop3',
    inStock: true,
    isFeatured: true
  }
];

export const getProductsByShop = (shopId: string): Product[] => {
  return products.filter(product => product.shopId === shopId);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};