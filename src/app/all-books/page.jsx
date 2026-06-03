import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooks = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const books = await res.json();
   

    return (
         <div>
             <h2 className="text-2xl font-bold my-5">Featured Book</h2> 
           <div className="grid grid-cols-4 gap-4">
            {
                books.map((book) => <BookCard key= {book.id} book={book} />)

            }
           </div>
         </div>
    );
};

export default AllBooks;