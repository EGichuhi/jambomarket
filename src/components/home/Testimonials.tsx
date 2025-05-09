import { UserRound } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Jambo Market has been essential for my business. As a Kenyan entrepreneur in Toronto, I can now reach customers across Canada who appreciate our authentic handwoven baskets.",
    author: "Jane Wambui",
    role: "Owner, Kenyan Treasures",
    rating: 5
  },
  {
    id: 2,
    content: "I was struggling to find a market for my Kenyan coffee beans until I joined Jambo Market. Now I have regular customers who appreciate quality Kenyan products.",
    author: "Joseph Kamau",
    role: "Founder, Savanna Spices",
    rating: 5
  },
  {
    id: 3,
    content: "The platform is beautifully designed and easy to use. It perfectly showcases my Maasai jewelry collection, and I've seen a significant increase in sales since joining.",
    author: "Sarah Nasimiyu",
    role: "Artisan, Maasai Designs",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-earth-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900">Success Stories</h2>
          <p className="mt-2 text-secondary-600 max-w-2xl mx-auto">
            Hear from Kenyan business owners who have found success in the Canadian market through Jambo Market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
            >
              <div className="flex-1">
                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial content */}
                <p className="text-secondary-700 italic">"{testimonial.content}"</p>
              </div>
              
              {/* Author information */}
              <div className="mt-6 flex items-center">
                <div className="bg-primary-100 text-primary-600 rounded-full p-2 mr-3">
                  <UserRound size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">{testimonial.author}</h4>
                  <p className="text-sm text-secondary-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;