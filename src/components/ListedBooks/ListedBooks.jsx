import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { getBookIdForRead, getBookIdForWish } from '../../utilities/localStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import WishBookCard from '../WishBookCard/WishBookCard';

const ListedBooks = () => {
    const allBooksData = useLoaderData();
    const readIds = getBookIdForRead();
    const wishIds = getBookIdForWish();

    const readBooksData = allBooksData.filter(book => readIds.includes(book.bookId));
    const wishBooksData = allBooksData.filter(book => wishIds.includes(book.bookId));
    // console.log(readBooksData, wishBooksData);

    return (
        <div className='mb-20'>
            <h3 className='text-center text-black text-3xl font-bold bg-[#1313130D] rounded-2xl py-6 mb-5'>Books</h3>
            <div className='max-w-fit mx-auto'>
                <details className="dropdown">
                    <summary className="btn text-base text-white bg-[#23BE0A] hover:bg-[#23BE0A] rounded-lg px-7">
                        Sort By<IoIosArrowDown className='text-base ml-2' />
                    </summary>
                    <ul className="dropdown-content text-[#13131388] text-sm bg-[#dedede] rounded-lg z-[1] w-[147px] p-3 font-semibold space-y-2">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#13131391] font-semibold text-base" aria-label="Read Books" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 rounded-lg p-6">
                        <h2 className='text-xl font-semibold text-black mb-5'>Total Books: {readBooksData.length}</h2>
                        {
                            readBooksData.map(readBook => <ReadBookCard
                                key={readBook.bookId}
                                readBook={readBook}
                            ></ReadBookCard>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#13131391] font-semibold text-base" aria-label="Wishlist books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 rounded-lg p-6">
                        <h2 className='text-xl font-semibold text-black mb-5'>Total Books: {wishBooksData.length}</h2>
                        {
                            wishBooksData.map(wishBook => <WishBookCard
                                key={wishBook.bookId}
                                wishBook={wishBook}
                            ></WishBookCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;