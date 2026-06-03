import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div className="border-b px-4">
      <nav className="flex flex-col md:flex-row justify-between items-center py-3 max-w-7xl mx-auto w-full gap-4 md:gap-0">

        {/* Logo */}
        <div className="flex items-center justify-center gap-1">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={60}
              height={60}
              className="object-cover h-auto w-auto"
            />
          </Link>

          <Link href="/" className="text-2xl font-bold">
            BookHub
          </Link>
        </div>

        {/* Menu */}
        <div className="flex gap-6">
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-5 text-sm md:text-base">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/all-books">All Books</NavLink>
            </li>

            <li>
              <NavLink href="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
          <Link href="/login" className="w-full sm:w-auto">
            <Button color="primary" className="w-full">
              Login
            </Button>
          </Link>

          <Link href="/register" className="w-full sm:w-auto">
            <Button color="secondary" className="w-full">
              Register
            </Button>
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;