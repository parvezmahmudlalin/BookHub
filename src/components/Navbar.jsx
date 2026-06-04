"use client";

import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { LogIn, UserPlus, LogOut } from "lucide-react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo.png"
              alt="BookHub"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              BookHub
            </h1>
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-6 font-medium">
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

          {/* Auth Section */}
          {!user ? (
            <div className="flex items-center gap-3">
              
              <Link href="/login">
                <Button
                  startContent={<LogIn size={16} />}
                  variant="bordered"
                  className="
                    px-6
                    border-blue-500
                    text-blue-600
                    font-semibold
                    rounded-full
                    hover:bg-blue-50
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  startContent={<UserPlus size={16} />}
                  className="
                    px-6
                    font-semibold
                    text-white
                    rounded-full
                    bg-linear-to-r
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                    hover:shadow-xl
                    hover:shadow-purple-200
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Register
                </Button>
              </Link>

            </div>
          ) : ( <div className="flex gap-3 items-center">
             <Avatar size="sm"> 
              <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
               <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
           <span className="font-medium"> {user?.name} </span> 
           <Button onClick={handleSignOut} size="sm" color="danger" > SignOut </Button> </div> )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;