import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='mb-20'>
            <h2 className='font-bold text-4xl text-black text-center mb-10'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map(book => <Book
                        key={book.bookId}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;