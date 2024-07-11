import React from 'react';
import { FaUserFriends } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ReadBookCard = ({ readBook }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = readBook;

    return (
        <div className='flex flex-col lg:flex-row items-center gap-6 mb-5 border border-[#13131326] rounded-2xl p-4'>
            <div className='lg:w-1/5 bg-[#1313130D] rounded-2xl'>
                <img className='lg:h-48' src={image} alt="" />
            </div>
            <div className='lg:w-4/5'>
                <h2 className='text-black font-bold text-xl mb-2'>{bookName}</h2>
                <p className='text-[#131313CC] font-medium text-sm'>By: {author}</p>
                <div className='flex flex-col lg:flex-row items-center gap-3 my-3 text-[#23BE0A]'>
                    <span className='text-black font-bold text-sm'>Tag</span>
                    {
                        tags.map((tag, idx) => <small key={idx} className='bg-[#23BE0A0D] rounded-3xl py-1 px-3 font-medium flex items-center text-xs'><FiHash />{tag}</small>)
                    }
                    <span className='text-[#131313CC] text-xs font-semibold flex items-center'><GrLocation className='text-base mr-1' /> Year of Publishing: {yearOfPublishing}</span>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-5 text-xs text-[#13131399] font-semibold border-b border-[#13131326] pb-3 mb-3'>
                    <p className='flex items-center gap-2'><FaUserFriends className='text-base' /> Publisher: {publisher}</p>
                    <p className='flex items-center gap-2'><IoDocumentSharp className='text-base' /> Page {totalPages}</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-xs font-semibold gap-5'>
                    <p className='text-[#328EFF] bg-[#328EFF26] rounded-full py-1 px-3'>Category: {category}</p>
                    <p className='text-[#FFAC33] bg-[#FFAC3326] rounded-full py-1 px-3'>Rating: {rating}</p>
                    <Link to={`/book/bookDetails/${bookId}`}>
                        <button className='bg-[#23BE0A] text-white rounded-full py-2 px-3'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;