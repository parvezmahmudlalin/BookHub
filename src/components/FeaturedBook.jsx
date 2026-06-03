import React from 'react';
import BookCard from './BookCard';

const FeaturedBook = async () => {
   const res = await fetch('https://book-hub-ashy-one.vercel.app/data.json');
    const data = await res.json();
    const featuredBook = data.slice(0,4); // Assuming the first book is the featured one
    return (
        <div>
           <h2 className="text-2xl font-bold my-5">Featured Book</h2> 
           <div className = "grid grid-cols-4 gap-4">
            {
                featuredBook.map((book) => <BookCard key= {book.id} book={book} />)

            }
           </div>

        </div>
    );
};

export default FeaturedBook;