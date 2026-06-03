import Banner from "@/components/Banner";
import MarqueeSection from "@/components/MarqueeSection";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Banner />
    <MarqueeSection />
    </div>
  );
}
