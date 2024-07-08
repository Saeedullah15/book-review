import React from 'react';
import { FiHash } from "react-icons/fi";
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookIdForRead, saveBookIdForWish } from '../../utilities/localStorage';

const BookDetails = () => {
    const allBooksData = useLoaderData();
    const { bookId } = useParams();

    const book = allBooksData.find(book => book.bookId === bookId);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleRead = () => {
        saveBookIdForRead(bookId);
        toast("added to your reading list!");
    }

    const handleWishlist = () => {
        saveBookIdForWish(bookId);
        toast("added to your wishlist!");
    }

    return (
        <div className='flex items-center gap-10 mb-20'>
            <div className='w-1/2 bg-[#1313130D] rounded-2xl py-20'>
                <img src={image} alt="" />
            </div>
            <div className='w-1/2'>
                <h2 className='text-black font-bold text-3xl mb-3'>{bookName}</h2>
                <p className='text-[#131313CC] font-semibold text-lg'>By: {author}</p>
                <p className='text-[#131313CC] font-semibold text-lg border-y-2 border-[#13131326] py-2 my-4'>{category}</p>
                <p className='font-bold text-black text-justify mb-4'>Review: <span className='text-[#131313B3] text-sm font-medium'>{review}</span></p>
                <div className='flex items-center gap-5 my-4 text-[#23BE0A] border-b-2 border-[#13131326] pb-4'>
                    <span className='text-black font-bold'>Tag</span>
                    {
                        tags.map((tag, idx) => <small key={idx} className='bg-[#23BE0A0D] rounded-3xl py-1 px-3 font-medium flex items-center'><FiHash />{tag}</small>)
                    }
                </div>
                <div className='flex items-center gap-10 mb-8'>
                    <div className='text-[#131313B3] text-sm font-medium space-y-3'>
                        <p>Number of Pages: </p>
                        <p>Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p>Rating: </p>
                    </div>
                    <div className='text-sm font-bold text-[#131313] space-y-3'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='space-x-4 text-white font-medium text-sm'>
                    <button onClick={handleRead} className='bg-white text-[#131313] border border-[#1313134D] rounded-md py-3 px-4'>Read</button>
                    <button onClick={handleWishlist} className='bg-[#59C6D2] rounded-md py-3 px-4'>Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;