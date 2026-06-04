import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import React from 'react';

const AllBooks = async ({searchParams}) => {
    const {category} =await searchParams;
    console.log(category);
    const res = await fetch('http://localhost:3000/data.json');
    const books = await res.json();

    const filteredBooks = category ? books.filter(book => book.category.toLowerCase() === category.toLowerCase()) : books;
   

    return (
         <div>
             <h2 className="text-2xl font-bold my-5">All Books</h2> 
             <Category/>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                filteredBooks.map((book) => <BookCard key= {book.id} book={book} />)

            }
           </div>
         </div>
    );
};

export default AllBooks;