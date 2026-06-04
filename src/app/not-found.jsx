import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col'>
      <h2 className='font-bold text-5xl text-pink-500'>This page is not found </h2>

      <Link href={'/'}>
      <button className='btn bg-purple-400 text-white mt-5'>
        Back to Home
      </button>
      </Link>
    </div>
  );
};

export default NotFound;