import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating } = book;

    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate(`/book/bookDetails/${bookId}`);
    }

    return (
        <div onClick={handleBookClick} className="bg-base-100 border border-[#13131326] rounded-2xl p-5">
            <figure>
                <img className='bg-[#F3F3F3] rounded-2xl'
                    src={image}
                    alt="books" />
            </figure>
            <div className='flex items-center gap-5 my-4 text-[#23BE0A] font-bold'>
                {
                    tags.map((tag, idx) => <small key={idx} className='bg-[#23BE0A0D] rounded-3xl py-1 px-3'>{tag}</small>)
                }
            </div>
            <div>
                <h2 className="font-bold text-xl text-black mb-3">{bookName}</h2>
                <p className='font-bold text-[#13131398] text-sm mb-4'>By : {author}</p>
            </div>
            <hr className='border border-dashed border-[#13131326]' />
            <div className='mt-4 flex justify-between items-center'>
                <p className='font-bold text-[#13131398] text-sm mb-4'>{category}</p>
                <p className='font-bold text-[#13131398] text-sm mb-4 flex items-center gap-2'>{rating} <FaRegStar className='text-[#424242]' /></p>
            </div>
        </div>
    );
};

export default Book;