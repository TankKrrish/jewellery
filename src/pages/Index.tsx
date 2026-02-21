import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import SpecialCollection from "@/components/SpecialCollection";
import FindYourChoice from "@/components/FindYourChoice";
import TrendingNow from "@/components/TrendingNow";
import VideoSection from "@/components/VideoSection";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <SpecialCollection />
      <FindYourChoice />
      <TrendingNow />
      <VideoSection />
      <AboutUs />
      <Testimonials />
      <InstagramSection />
      <Footer />
    </main>
  );
};

export default Index;
