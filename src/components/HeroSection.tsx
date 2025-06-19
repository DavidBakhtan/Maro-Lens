import React, { useEffect, useState } from 'react';
import { ChevronDown, Camera, Video, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient bg-400% animate-gradient-shift opacity-60"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="particle absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div className="particle absolute top-40 right-20 w-6 h-6 bg-pink-200/30 rounded-full animate-float"></div>
        <div className="particle absolute bottom-40 left-20 w-5 h-5 bg-purple-200/30 rounded-full animate-float"></div>
        <div className="particle absolute bottom-20 right-10 w-3 h-3 bg-blue-200/30 rounded-full animate-float"></div>
        <div className="particle absolute top-1/2 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-float"></div>
        <div className="particle absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-200/20 rounded-full animate-float"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-12 md:py-24 max-w-6xl mx-auto">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight animate-text-glow">
            Capturing
            <span className="block text-7xl md:text-9xl text-gradient-animated animate-scale-in">
              Life's Magic
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: '800ms'
        }}>
            Professional videography and photography that tells your unique story with 
            <span className="text-gradient-animated font-semibold"> artistic vision</span> and 
            <span className="text-gradient-animated font-semibold"> creative excellence</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-left" style={{
          animationDelay: '1200ms'
        }}>
            <Link to="/portfolio" className="px-10 py-5 professional-button text-white rounded-full font-semibold hover:scale-110 transition-all duration-500 transform animate-pulse-glow">
              View My Work
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-500 transform hover:scale-110 backdrop-blur-md">
              Get In Touch
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{
          animationDelay: '1600ms'
        }}>
            <div className="professional-stats p-6 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-gradient-animated mb-2">300+</div>
              <div className="text-sm text-white/80">Photos Captured</div>
            </div>
            <div className="professional-stats p-6 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-gradient-animated mb-2">20+</div>
              <div className="text-sm text-white/80">Videos Created</div>
            </div>
            <div className="professional-stats p-6 rounded-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-3xl font-bold text-gradient-animated mb-2">30+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-[49%] transform -translate-x-1/2 animate-bounce px-0">
        <ChevronDown size={40} className="text-white/80 animate-pulse px-0 py-0 mx-0" />
      </div>
    </section>;
};
export default HeroSection;