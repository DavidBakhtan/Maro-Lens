import React, { useEffect, useState } from 'react';
import { Star, Quote, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { ScrollArea } from '@/components/ui/scroll-area';
interface Review {
  id: string;
  name: string;
  title: string;
  message: string;
  rating: number;
  image_url: string;
  created_at: string;
}
const TestimonialsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTopReviews();
  }, []);
  const fetchTopReviews = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('reviews').select('*').in('rating', [4, 5]).order('created_at', {
        ascending: false
      });
      if (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      } else {
        setReviews(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Default testimonials to show when no reviews are available
  const defaultTestimonials = [{
    id: 'default-1',
    name: 'Sarah Johnson',
    title: 'Bride',
    message: 'MaroLens captured our wedding day perfectly. Every moment, every emotion was beautifully preserved. The photos are absolutely stunning and we couldn\'t be happier!',
    rating: 5,
    image_url: '/placeholder.svg',
    created_at: ''
  }, {
    id: 'default-2',
    name: 'Michael Chen',
    title: 'CEO, TechStart',
    message: 'Professional, creative, and reliable. The corporate video they created for our company exceeded all expectations. Highly recommended for any business needs.',
    rating: 5,
    image_url: '/placeholder.svg',
    created_at: ''
  }, {
    id: 'default-3',
    name: 'Emily Rodriguez',
    title: 'Event Coordinator',
    message: 'Working with MaroLens was a dream. They have an incredible eye for detail and made our event look absolutely magical. The quality is unmatched.',
    rating: 5,
    image_url: '/placeholder.svg',
    created_at: ''
  }];
  const displayedReviews = reviews.length > 0 ? reviews : defaultTestimonials;
  if (isLoading) {
    return <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-gray-800 mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                <div className="h-16 bg-gray-200 rounded mb-4"></div>
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>)}
          </div>
        </div>
      </section>;
  }
  return <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-display font-bold text-gray-800 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience with us.
          </p>
        </div>

        {displayedReviews.length === 0 ? <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No reviews yet</h3>
            <p className="text-gray-500">Be the first to leave a review!</p>
          </div> : <ScrollArea className="h-[600px] rounded-3xl">
            <div className="space-y-6 pr-4">
              {displayedReviews.map((review, index) => <div key={review.id} className="relative glass-card p-8 rounded-3xl hover:shadow-xl transition-all duration-500 animate-fade-in group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-purple-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                    </div>
                    {review.created_at && <span className="text-sm text-gray-400 mx-[50px]">
                        {new Date(review.created_at).toLocaleDateString('en')}
                      </span>}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{review.message}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center mr-4">
                        {review.image_url && review.image_url !== '/placeholder.svg' ? <img src={review.image_url} alt={review.name} className="w-10 h-10 rounded-full object-cover" onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }} /> : null}
                        <User className={`w-5 h-5 text-purple-600 ${review.image_url && review.image_url !== '/placeholder.svg' ? 'hidden' : ''}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <p className="text-gray-500 text-sm">{review.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-600">
                        {review.rating}/5
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </ScrollArea>}
      </div>
    </section>;
};
export default TestimonialsSection;