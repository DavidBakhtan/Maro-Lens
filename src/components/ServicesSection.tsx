
import React from 'react';
import { Camera, Video, Users, Package, Heart, Briefcase } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Individual, couple, and family portraits that capture your authentic personality and connections.",
      features: ["Professional headshots", "Family sessions", "Couple portraits", "Senior portraits"],
      gradient: "bg-coral-pink"
    },
    {
      icon: Video,
      title: "Commercial Videography",
      description: "Dynamic video content for brands, products, and businesses that tells your story effectively.",
      features: ["Brand videos", "Product demos", "Corporate events", "Social media content"],
      gradient: "bg-orange-teal"
    },
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Romantic, timeless wedding photography that preserves your most precious moments forever.",
      features: ["Engagement sessions", "Wedding day coverage", "Bridal portraits", "Reception moments"],
      gradient: "bg-blue-purple"
    },
    {
      icon: Package,
      title: "Product Photography",
      description: "High-quality product photography that showcases your items in their best light for marketing.",
      features: ["E-commerce photos", "Lifestyle products", "Food photography", "Brand imagery"],
      gradient: "bg-warm-sunset"
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Professional event coverage that captures the energy, emotions, and key moments of your gathering.",
      features: ["Corporate events", "Private parties", "Celebrations", "Conferences"],
      gradient: "bg-coral-pink"
    },
    {
      icon: Briefcase,
      title: "Brand Storytelling",
      description: "Comprehensive visual storytelling that builds your brand identity through cohesive imagery.",
      features: ["Brand sessions", "Content creation", "Marketing materials", "Social media packages"],
      gradient: "bg-orange-teal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Services That Bring
            <span className="block text-gradient">Your Vision to Life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate moments to grand celebrations, I offer a comprehensive range of photography and videography 
            services tailored to meet your unique needs and creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Header */}
              <div className={`${service.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <service.icon size={48} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-pink-400 hover:text-pink-500 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-400 group-hover:text-white group-hover:border-transparent">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Packages Available</h3>
            <p className="text-gray-600 mb-6">
              Every project is unique, and I believe your photography experience should be too. 
              I offer flexible packages and custom solutions tailored to your specific needs, timeline, and budget.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
