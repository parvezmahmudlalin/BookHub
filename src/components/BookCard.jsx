import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    );
};

export default BookCard;