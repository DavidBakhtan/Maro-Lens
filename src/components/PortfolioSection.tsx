
import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('photography');

  const photographyProjects = [
    {
      id: 1,
      title: "Golden Hour Portraits",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Urban Lifestyle",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Product Showcase",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Wedding Moments",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Brand Story",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Artistic Vision",
      category: "Art",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const videographyProjects = [
    {
      id: 1,
      title: "Wedding Highlights",
      category: "Wedding",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Brand Commercial",
      category: "Commercial",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1:30"
    },
    {
      id: 3,
      title: "Documentary Style",
      category: "Documentary",
      thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:20"
    },
    {
      id: 4,
      title: "Product Demo",
      category: "Product",
      thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:15"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            My Creative
            <span className="block text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a collection of my favorite projects, from intimate portraits to dynamic commercial work. 
            Each piece tells a unique story and showcases the artistry behind the lens.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('photography')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'photography'
                  ? 'bg-white text-pink-500 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Photography
            </button>
            <button
              onClick={() => setActiveTab('videography')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'videography'
                  ? 'bg-white text-pink-500 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Videography
            </button>
          </div>
        </div>

        {/* Photography Portfolio */}
        {activeTab === 'photography' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {photographyProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-orange-300 mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Eye className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videography Portfolio */}
        {activeTab === 'videography' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {videographyProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="text-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium text-orange-300 mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-coral-pink text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Create Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
