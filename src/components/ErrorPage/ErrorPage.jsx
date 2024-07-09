import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h2 className='text-black font-bold text-4xl text-center mt-10'>{error.status} | {error.statusText}</h2>
            <p className='text-center text-base font-semibold mt-5'>{error.data}</p>
            <Link to="/" className='flex justify-center mt-8'>
                <button className='bg-[#23BE0A] rounded-lg py-2 px-4 text-white font-medium'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;