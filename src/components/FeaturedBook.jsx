import React from 'react';
import BookCard from './BookCard';

const FeaturedBook = async () => {
   const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    const featuredBook = data.slice(0,4); 
    return (
       <div>
  <h2 className="text-2xl font-bold my-5 text-center md:text-left">
    Featured Books
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {featuredBook.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
</div>
    );
};

export default FeaturedBook;