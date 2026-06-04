import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] h-[60vh] w-full bg-cover bg-center flex items-center rounded-lg shadow-xl overflow-hidden">
      
      <div className="w-full h-full bg-black/60 flex items-center rounded-lg">
        
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl animate__animated animate__fadeInUp">
            Find Your Next Read
          </h1>

          {/* Description */}
          <p className="text-gray-200 mb-6 max-w-xl animate__animated animate__fadeInUp animate__delay-1s">
            Explore thousands of books and start your reading journey today.
          </p>

          {/* Button */}
          <Link href="/all-books">
            <Button className="bg-blue-600 text-white animate__animated animate__pulse animate__infinite hover:scale-105 transition-transform duration-300">
              Browse Now
            </Button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Banner;