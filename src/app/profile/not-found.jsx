import Link from "next/link";
import React from "react";

const NotFound = () => {
  const isLoggedIn = false; 

  return (
    <div className="h-[80vh] flex justify-center items-center flex-col text-center px-4">

      <h2 className="font-bold text-5xl text-pink-500">
        This page is not found
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        {isLoggedIn
          ? "The page you are looking for does not exist."
          : "You need to login first to access your profile or this page."}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <Link href="/">
          <button className="btn bg-purple-400 text-white">
            Back to Home
          </button>
        </Link>

        {!isLoggedIn && (
          <Link href="/login">
            <button className="btn bg-blue-500 text-white">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Optional hint */}
      {!isLoggedIn && (
        <p className="text-sm text-gray-400 mt-4">
          After login you can access My Profile page.
        </p>
      )}
    </div>
  );
};

export default NotFound;