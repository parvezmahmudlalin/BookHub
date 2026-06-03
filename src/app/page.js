import Banner from "@/components/Banner";
import FeaturedBook from "@/components/FeaturedBook";
import LibraryStats from "@/components/LibraryStats";
import MarqueeSection from "@/components/MarqueeSection";
import WhyChooseBookHub from "@/components/WhyChooseBookHub";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div>
    <Banner />
    <Marquee><MarqueeSection /></Marquee>
    <FeaturedBook></FeaturedBook>
    <LibraryStats></LibraryStats>
    <WhyChooseBookHub></WhyChooseBookHub>
    
    </div>
  );
}
