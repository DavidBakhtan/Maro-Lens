
import React from 'react';
import { Heart, Instagram, Facebook, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/469c07a6-1c73-459f-a252-b0818dd04a2f.png" 
              alt="MaroLens Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Capturing life's precious moments through the lens of creativity and passion. 
              Professional photography and videography services that tell your unique story.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/maro_lens?igsh=eTZrcXE5MWhiMzkz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/193WVRCJHw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com/@marolens?si=r2aqB7UCaglTRgti"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:info@marolens.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Portrait Photography</li>
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Commercial Video</li>
              <li className="text-gray-400">Product Photography</li>
              <li className="text-gray-400">Brand Storytelling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Developed by David Bakhtan @ NuGen Dev for MaroLens © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
