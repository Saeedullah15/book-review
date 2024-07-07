import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-20'>
            <div className="hero bg-base-200 py-16 px-24 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
                    <div>
                        <img
                            src="https://i.ibb.co/tDgXZG7/banner1.jpg"
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-black leading-[65px] mb-10">Books to freshen <br /> up your bookshelf</h1>
                        <Link to="/listedBooks"><button className='btn bg-[#23BE0A] hover:bg-[#30d317] rounded-lg py-2 px-4 text-white font-bold text-base'>View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;