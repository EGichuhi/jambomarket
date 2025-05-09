import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-700 text-white">
      <div className="container-custom">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to showcase your Kenyan business?</h2>
            <p className="mt-4 text-primary-100 text-lg">
              Join our community of Kenyan entrepreneurs in Canada and reach customers who value authentic products and services.
            </p>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-1/3 lg:text-right">
            <Link 
              to="/register" 
              className="btn bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 font-semibold"
            >
              Start Selling Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;