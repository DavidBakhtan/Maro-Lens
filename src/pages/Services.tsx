import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Video, Users, Building, Heart, Star, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Services = () => {
  const services = [{
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with artistic vision",
    features: ["Full day coverage", "Engagement sessions", "Bridal portraits", "Digital gallery"],
    price: "Starting at $1,499",
    color: "purple"
  }, {
    icon: Camera,
    title: "Portrait Photography",
    description: "Professional individual and family portrait sessions",
    features: ["Individual portraits", "Family sessions", "Couple shoots", "Maternity photos"],
    price: "Starting at $299",
    color: "pink"
  }, {
    icon: Users,
    title: "Event Photography",
    description: "Comprehensive event coverage and documentation",
    features: ["Corporate events", "Parties & celebrations", "Conferences", "Award ceremonies"],
    price: "Starting at $599",
    color: "indigo"
  }, {
    icon: Video,
    title: "Commercial Videography",
    description: "Professional video content for your business",
    features: ["Brand videos", "Product demos", "Corporate events", "Social media content"],
    price: "Starting at $899",
    color: "blue"
  }, {
    icon: Building,
    title: "Product Photography",
    description: "Stunning product images for your brand",
    features: ["E-commerce photos", "Lifestyle shots", "Detail photography", "Brand consistency"],
    price: "Starting at $199",
    color: "cyan"
  }, {
    icon: Star,
    title: "Brand Storytelling",
    description: "Visual content that tells your unique story",
    features: ["Brand photography", "Lifestyle content", "Behind-the-scenes", "Social media packages"],
    price: "Starting at $799",
    color: "violet"
  }];
  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: "from-pink-400 to-pink-600",
      purple: "from-purple-400 to-purple-600",
      blue: "from-blue-400 to-blue-600",
      cyan: "from-cyan-400 to-cyan-600",
      indigo: "from-indigo-400 to-indigo-600",
      violet: "from-violet-400 to-violet-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
  };
  const processSteps = [{
    step: "01",
    title: "Consultation",
    description: "We discuss your vision, style preferences, and project requirements"
  }, {
    step: "02",
    title: "Planning",
    description: "Detailed planning including location, timing, and creative direction"
  }, {
    step: "03",
    title: "Capture",
    description: "Professional photo/video session with artistic direction and guidance"
  }, {
    step: "04",
    title: "Delivery",
    description: "Edited, high-quality images/videos delivered in your preferred format"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photography and videography services tailored to capture your unique story and vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-scale-in group" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-pulse-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>)}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  
                  <Link to="/contact" className={`block w-full text-center py-3 px-6 bg-gradient-to-r ${getColorClasses(service.color)} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Get Quote
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              My Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless journey from initial consultation to final delivery, ensuring your vision comes to life.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => <div key={index} className="relative text-center animate-fade-in" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="relative mb-6">
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div >
                  {index < processSteps.length - 1 && <div className="hidden lg:block z-0 absolute top-10 left-[calc(100%_-_100px)] w-60 h-0.5 bg-gradient-to-r from-pink-200 to-purple-200"></div>}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 animate-fade-in">
            <Clock className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce-slow" />
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your vision and create something beautiful together.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;