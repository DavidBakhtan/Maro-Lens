
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send, Clock, MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          type: 'contact'
        }
      });

      if (error) {
        console.error('Error sending email:', error);
        toast.error('Something went wrong while sending your message. Please try again shortly.');
      } else {
        console.log('Email sent successfully:', data);
        toast.success('Your message has been sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong while sending your message. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@marolens.com",
      link: "mailto:info@marolens.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (416) 723-9089",
      link: "tel:+14167239089"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Brampton, ON, Canada",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/maro_lens?igsh=eTZrcXE5MWhiMzkz&utm_source=qr",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/share/193WVRCJHw/?mibextid=wwXIfr",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      link: "https://youtube.com/@marolens?si=r2aqB7UCaglTRgti",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center mb-8">
                  <MessageCircle className="w-8 h-8 text-pink-500 mr-4" />
                  <h2 className="text-3xl font-display font-bold text-gray-900">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="commercial">Commercial Videography</option>
                      <option value="product">Product Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="brand">Brand Storytelling</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                      placeholder="Tell me about your project, vision, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                
                {/* Contact Details */}
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{info.title}</div>
                          <div className="text-gray-600">{info.info}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="glass-card rounded-3xl p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Follow My Work</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300`}>
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{social.name}</div>
                          <div className="text-gray-600">@marolens</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="glass-card rounded-3xl p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-green-500 mr-4" />
                    <h3 className="text-2xl font-display font-bold text-gray-900">Quick Response</h3>
                  </div>
                  <p className="text-gray-600">
                    I typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to call or send a direct message on social media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <ReviewForm />

      {/* Map Section with Embedded Google Map */}
      <section className="py-16 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
              <div className="text-center py-8">
                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Based in Ontario</h3>
                <p className="text-gray-600 mb-4">Available for projects worldwide</p>
              </div>
              <div className="w-full h-96">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.788253716238!2d-79.82707262415157!3d43.687586051147665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15f83db76e69%3A0x8723be845c2140f8!2s78%20Enford%20Crescent%2C%20Brampton%2C%20ON%20L7A%204C7!5e0!3m2!1sen!2sca!4v1718798300000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
