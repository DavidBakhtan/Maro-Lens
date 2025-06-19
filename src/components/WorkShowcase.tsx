
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, Heart, Star } from 'lucide-react';

const WorkShowcase = () => {
  const portfolioItems = [
    {
      id: 1,
      type: 'photo',
      title: 'Wedding Photography',
      description: 'Capturing love stories with artistic elegance',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Wedding',
      icon: Heart
    },
    {
      id: 2,
      type: 'video',
      title: 'Corporate Video',
      description: 'Professional brand storytelling',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Corporate',
      icon: Video
    },
    {
      id: 3,
      type: 'photo',
      title: 'Portrait Session',
      description: 'Individual and family portraits',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Portrait',
      icon: Camera
    },
    {
      id: 4,
      type: 'video',
      title: 'Event Coverage',
      description: 'Dynamic event documentation',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Event',
      icon: Star
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-display font-bold text-gray-800 mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a collection of our most cherished projects, each telling a unique story through the lens of creativity and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 pb-9 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium opacity-80">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* Type Badge */}
                {/* <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'photo' 
                      ? 'bg-pink-100 text-pink-600' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {item.type}
                  </span>
                </div> */}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-400 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
