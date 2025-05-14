import Cto from '@/components/Cto';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Review from '@/components/Review';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Review />
      <Cto />
      <Newsletter />
    </>
  );
};

export default page;