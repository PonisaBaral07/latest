import React from 'react';
import { useNavigate } from 'react-router';

const Services = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      id: 1,
      title: "Gourmet Catering",
      description: "Elevate your events with our custom menus, crafted by professional chefs for weddings, parties, and corporate gatherings.",
      icon: "🍳", 
      bgClass: "bg-orange-50",
    },
    {
      id: 2,
      title: "Super Fast Delivery",
      description: "Hungry? We've got you covered. Get piping hot, delicious meals delivered straight to your doorstep in under 30 minutes.",
      icon: "🚀",
      bgClass: "bg-red-50",
    },
    {
      id: 3,
      title: "Fresh & Organic Ingredients",
      description: "We care about your health. Every dish on our menu is prepared using 100% organic, locally-sourced, and fresh ingredients.",
      icon: "🌱",
      bgClass: "bg-green-50",
    },
    {
      id: 4,
      title: "Private Chef Experience",
      description: "Bring the restaurant luxury home. Book our top-tier chefs to cook a personalized, multi-course meal live in your kitchen.",
      icon: "🎩",
      bgClass: "bg-amber-50",
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Our Premium Services
        </h1>
        <p className="text-lg text-gray-600">
          We don’t just serve food; we create unforgettable culinary experiences wrapped in top-notch hospitality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-1"
          >
            <div>
              {/* Icon Circle */}
              <div className={`w-16 h-16 ${service.bgClass} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Subtle Action Link */}
            <button 
              onClick={() => navigate('/contact')}
              className="text-left font-medium text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center gap-2 text-sm"
            >
              Learn More <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto bg-orange-600 rounded-3xl mt-20 p-8 sm:p-12 text-center text-white shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Ready to taste the best?</h2>
        <p className="text-orange-100 mb-8 max-w-xl mx-auto">
          Check out our extensive menu filled with mouth-watering options or book a custom service today.
        </p>
        <button 
          onClick={() => navigate('/menu')}
          className="bg-white text-orange-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-md"
        >
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

export default Services;