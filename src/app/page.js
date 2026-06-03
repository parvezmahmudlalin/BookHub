import Banner from "@/components/Banner";
import FeaturedBook from "@/components/FeaturedBook";
import MarqueeSection from "@/components/MarqueeSection";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div>
    <Banner />
    <Marquee><MarqueeSection /></Marquee>
    <FeaturedBook></FeaturedBook>
    
    </div>
  );
}
