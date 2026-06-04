import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import React from 'react';

const AllBooks = async ({searchParams}) => {
    const {category, search} =  searchParams;
    
    const res = await fetch('http://localhost:3000/data.json');
    const books = await res.json();

    const filteredBooks = books.filter(book => {
        const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
        const matchesSearch = search ? book.title.toLowerCase().includes(search.toLowerCase()) : true;
        return matchesCategory && matchesSearch;
    });

    return (
         <div>
             <h2 className="text-2xl font-bold my-5">All Books</h2>

           
             <form className="mb-6">
                 <input
                     type="text"
                     name="search"
                     defaultValue={search || ''}
                     placeholder="Search books by title..."
                     className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 shadow-sm"
                 />
                 {category && <input type="hidden" name="category" value={category} />}
             </form>

             <Category/>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
                }
             </div>
         </div>
    );
};

export default AllBooks;