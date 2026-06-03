import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-b px-2">
         <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
      
        {/* Logo */}
        <div className="flex items-center justify-center gap-1">
          <Link href="/">
            <Image   src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto" />
          </Link>
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            BookHub
          </Link>
        </div>

        {/* Menu */}


        <div className="flex gap-6">

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="/books">All Books</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

         
        </div> 

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link href="/login">
            <Button color="primary">Login</Button>
          </Link>

          <Link href="/signup">
            <Button color="secondary">Sign Up</Button>
          </Link>
        </div>
     
      </nav>
    </div>
  );
};

export default Navbar;
//  <Link href="/">Home</Link>
//           <Link href="/books">All Books</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>