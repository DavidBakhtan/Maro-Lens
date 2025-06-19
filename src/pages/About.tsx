import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import { Quote, Heart, Star, Award, Sparkles, HeartHandshake, Camera } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Sparkles, title: "Emerging Talent", desc: "On a journey from passion to profession, building a portfolio filled with love, color, and creativity." },
    { icon: HeartHandshake, title: "Client Trust", desc: "Capturing moments for families and small businesses who believed in my vision from the start." },
    { icon: Camera, title: "Handmade to Lens Made", desc: "From epoxy art and handmade creations to heartfelt photography — each frame is crafted with the same artistic soul." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
              About MaroLens
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate storyteller capturing life's precious moments through the lens of creativity and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-slide-in-left">
              <div className="aspect-square rounded-3xl overflow-hidden bg-pink-purple p-3 transform hover:scale-105 transition-all duration-700 animate-pulse-glow">
                <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/about_image.png" 
                    alt="Professional photographer at work"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce-slow"></div>
            </div>
            
            {/* Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">
                Creating Stories That
                <span className="block text-gradient animate-text-glow">Inspire & Connect</span>
              </h2>
              
              <h2 className="block text-1xl md:text-2xl text-gradient-animated font-semibold">Hi, I'm Maro – the heart behind Maro Lens.</h2>
              <div className="prose prose-lg max-w-none text-gray-700 mb-10 space-y-6">
                <p className="text-xl leading-relaxed">
                 I'm a passionate photographer and visual storyteller with a love for colors, 
                  creativity, and capturing the magic in everyday moments.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey began not with a camera, but with my hands – crafting handmade art, 
                  epoxy resin pieces, and painted boards under the brand Creative Handmade. 
                  I believed in the beauty of what I created, but I also felt that no one could truly see my vision unless I captured it through professional, 
                  artistic photography.
                </p>

                 <p className="text-lg leading-relaxed">
                  That spark led me into the world of visual storytelling. 
                   Inspired by my love for my family and children, 
                   I began to document our warmest, most intimate moments — 
                   photos and videos that speak of love, laughter, and timeless emotion. 
                   What started as a personal passion quickly became a calling, 
                   as friends began asking me to create the same magic for them.
                </p>

                 <p className="text-lg leading-relaxed">
                  Today, I blend my background in design, my artistic eye, 
                   and my deep emotional connection to moments into a photography experience that's more than just a session — 
                   it's a journey. Whether I'm capturing family memories or bringing a product to life for a business, 
                   I approach each project with creativity, dedication, 
                   and a desire to make every frame feel personal and unforgettable.
                </p>

                <p className="text-lg leading-relaxed">
                  With a keen sense of current trends and a commitment to staying updated in the fast-paced world of social media, 
                  I ensure that every project reflects modern beauty with authentic soul.
                </p>
                
                <p className="text-lg leading-relaxed">
                  This is me. This is <span className="text-gradient-animated font-semibold">Maro Lens</span>. And I can't wait to help you tell your story.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-pink-blue text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Portrait Photography
                </div>
                <div className="bg-pink-purple text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Commercial Video
                </div>
                <div className="bg-pink-blue text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Brand Storytelling
                </div>
                <div className="bg-pink-purple text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Wedding Photography
                </div>
                <div className="bg-pink-blue text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Product Photography
                </div>
                <div className="bg-pink-purple text-white px-6 py-3 rounded-full font-semibold animate-pulse-glow">
                  Event Photography
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-display font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Recognition & Growth
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center p-8 glass-card rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <achievement.icon className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-bounce-slow" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default About;
