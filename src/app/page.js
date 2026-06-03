import Banner from "@/components/Banner";
import MarqueeSection from "@/components/MarqueeSection";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Banner />
    <Marquee><MarqueeSection /> </Marquee>
    
    </div>
  );
}
