import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { getBookIdForRead, getBookIdForWish } from '../../utilities/localStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import WishBookCard from '../WishBookCard/WishBookCard';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    console.log(readBooks);

    const allBooksData = useLoaderData();
    const readIds = getBookIdForRead();
    const wishIds = getBookIdForWish();
    // console.log(allBooksData);

    useEffect(() => {
        const readBooksData = allBooksData.filter(book => readIds.includes(book.bookId));
        setReadBooks(readBooksData);

        const wishBooksData = allBooksData.filter(book => wishIds.includes(book.bookId));
        setWishBooks(wishBooksData);
    }, [])

    const handleSorting = (text) => {
        if (text === "rating") {
            const ascendingSort = readBooks.sort(function (a, b) { return a.rating - b.rating });
            const descendingSort = ascendingSort.reverse();
            setReadBooks(descendingSort);
            console.log(readBooks);
        }
    }

    return (
        <div className='mb-20'>
            <Helmet>
                <title>Book Haven | Listed Books</title>
            </Helmet>
            <h3 className='text-center text-black text-3xl font-bold bg-[#1313130D] rounded-2xl py-6 mb-5'>Books</h3>
            <div className='max-w-fit mx-auto mb-5'>
                <details className="dropdown">
                    <summary className="btn text-base text-white bg-[#23BE0A] hover:bg-[#23BE0A] rounded-lg px-7">
                        Sort By<IoIosArrowDown className='text-base ml-2' />
                    </summary>
                    <ul className="dropdown-content text-[#13131388] text-sm bg-[#dedede] rounded-lg z-[1] w-[147px] p-3 font-semibold space-y-2 cursor-pointer">
                        <li onClick={() => handleSorting("rating")}><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#13131391] font-semibold text-base" aria-label="Read Books" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 rounded-lg p-6">
                        <h2 className='text-xl font-semibold text-black mb-5'>Total Books: {readBooks.length}</h2>
                        {
                            readBooks.map(readBook => <ReadBookCard
                                key={readBook.bookId}
                                readBook={readBook}
                            ></ReadBookCard>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#13131391] font-semibold text-base" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 rounded-lg p-6">
                        <h2 className='text-xl font-semibold text-black mb-5'>Total Books: {wishBooks.length}</h2>
                        {
                            wishBooks.map(wishBook => <WishBookCard
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