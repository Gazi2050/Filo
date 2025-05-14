import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Review from '@/components/Review';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Review />
    </>
  );
};

export default page;