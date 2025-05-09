import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, ArrowRight, CheckCircle } from 'lucide-react';

const BusinessSignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    businessType: '',
    description: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
    }
  };

  const benefits = [
    'Access to Canadian customers seeking authentic Kenyan products',
    'Easy-to-use platform for managing your online store',
    'Secure payment processing and order management',
    'Marketing tools to promote your products',
    'Support from our dedicated business success team'
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-primary-700 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Start Selling on Jambo Market</h1>
            <p className="mt-4 text-primary-100">
              Join our community of Kenyan entrepreneurs and reach customers across Canada
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Progress Steps */}
                <div className="flex justify-between mb-8">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`flex items-center ${num < 3 ? 'flex-1' : ''}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step >= num
                            ? 'bg-primary-600 text-white'
                            : 'bg-secondary-200 text-secondary-600'
                        }`}
                      >
                        {step > num ? <CheckCircle size={16} /> : num}
                      </div>
                      {num < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step > num ? 'bg-primary-600' : 'bg-secondary-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Basic Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                        Basic Information
                      </h2>
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-secondary-700 mb-1">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium text-secondary-700 mb-1">
                          Owner's Name
                        </label>
                        <input
                          type="text"
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700 mb-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Details */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                        Business Details
                      </h2>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-secondary-700 mb-1">
                          Business Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="input"
                          required
                          placeholder="City, Province"
                        />
                      </div>
                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-secondary-700 mb-1">
                          Business Type
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="art">Art & Crafts</option>
                          <option value="food">Food & Beverages</option>
                          <option value="clothing">Clothing & Fashion</option>
                          <option value="jewelry">Jewelry & Accessories</option>
                          <option value="services">Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">
                          Business Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="input h-32"
                          required
                          placeholder="Tell us about your business and what makes it unique..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review & Terms */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                        Review & Agreement
                      </h2>
                      
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <h3 className="font-medium text-secondary-900 mb-2">Business Information</h3>
                        <dl className="space-y-1">
                          <div className="flex">
                            <dt className="w-32 text-secondary-600">Business Name:</dt>
                            <dd className="text-secondary-900">{formData.businessName}</dd>
                          </div>
                          <div className="flex">
                            <dt className="w-32 text-secondary-600">Owner:</dt>
                            <dd className="text-secondary-900">{formData.ownerName}</dd>
                          </div>
                          <div className="flex">
                            <dt className="w-32 text-secondary-600">Email:</dt>
                            <dd className="text-secondary-900">{formData.email}</dd>
                          </div>
                          <div className="flex">
                            <dt className="w-32 text-secondary-600">Location:</dt>
                            <dd className="text-secondary-900">{formData.location}</dd>
                          </div>
                          <div className="flex">
                            <dt className="w-32 text-secondary-600">Type:</dt>
                            <dd className="text-secondary-900">{formData.businessType}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="acceptTerms"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="mt-1"
                            required
                          />
                          <label htmlFor="acceptTerms" className="ml-2 text-sm text-secondary-600">
                            I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-700">Terms of Service</Link> and{' '}
                            <Link to="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="btn btn-secondary"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary ml-auto"
                    >
                      {step === 3 ? 'Create Account' : 'Continue'}
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center text-primary-600 mb-6">
                  <Store size={24} />
                  <h2 className="text-xl font-semibold ml-2">Why Sell on Jambo Market?</h2>
                </div>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-accent-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-800 font-medium">
                    "Jambo Market has been essential for my business. As a Kenyan entrepreneur in Toronto, I can now reach customers across Canada."
                  </p>
                  <p className="mt-2 text-primary-600 font-medium">
                    - Sarah Wanjiku, Owner of Kenyan Treasures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignupPage;