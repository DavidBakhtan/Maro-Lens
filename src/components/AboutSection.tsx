
import React from 'react';
import { Quote } from 'lucide-react';

const AboutSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "MaroLens captured our wedding day with such artistic vision. Every photo tells a story and brings back the emotions of that perfect day.",
      project: "Wedding Photography"
    },
    {
      name: "Mike Chen",
      text: "The product video she created for our brand elevated our marketing completely. Professional, creative, and exactly what we envisioned.",
      project: "Commercial Videography"
    },
    {
      name: "Emily Rodriguez",
      text: "Her eye for detail and ability to capture authentic moments made our family session feel natural and fun. We love every single photo!",
      project: "Family Portrait Session"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-orange-200 p-2">
              <div className="w-full h-full bg-gray-300 rounded-xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional photographer at work"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Creating Stories That
              <span className="block text-gradient">Inspire & Connect</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>
                Welcome to my world of visual storytelling. I'm a passionate photographer and videographer 
                who believes that every moment has the power to tell an extraordinary story. With a background 
                in design and an eye for the authentic, I specialize in capturing the essence of life's most 
                precious moments.
              </p>
              
              <p>
                From intimate family sessions to dynamic commercial projects, my approach combines artistic 
                vision with technical expertise to create imagery that not only looks beautiful but feels 
                genuine. I believe in building connections with my clients, understanding their vision, 
                and bringing their stories to life through my lens.
              </p>
              
              <p>
                Every project is a new adventure, and I'm committed to delivering work that exceeds 
                expectations while making the entire experience enjoyable and memorable.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-coral-pink text-white px-6 py-3 rounded-full font-semibold">
                Portrait Photography
              </div>
              <div className="bg-orange-teal text-white px-6 py-3 rounded-full font-semibold">
                Commercial Video
              </div>
              <div className="bg-blue-purple text-white px-6 py-3 rounded-full font-semibold">
                Brand Storytelling
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
            What Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="text-pink-400 mb-4" size={32} />
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
