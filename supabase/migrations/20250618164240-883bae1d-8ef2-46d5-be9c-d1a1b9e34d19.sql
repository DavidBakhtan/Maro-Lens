
-- Create a storage bucket for review images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'reviews', 
  'reviews', 
  true, 
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
);

-- Create policy to allow anyone to upload images to the reviews bucket
CREATE POLICY "Anyone can upload review images" 
  ON storage.objects 
  FOR INSERT 
  WITH CHECK (bucket_id = 'reviews');

-- Create policy to allow anyone to view review images
CREATE POLICY "Anyone can view review images" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'reviews');

-- Create policy to allow anyone to delete review images (optional)
CREATE POLICY "Anyone can delete review images" 
  ON storage.objects 
  FOR DELETE 
  USING (bucket_id = 'reviews');
