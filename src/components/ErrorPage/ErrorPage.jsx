import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h2 className='text-black font-bold text-4xl text-center mt-10'>{error.status} | {error.statusText}</h2>
            <p className='text-center text-base font-semibold mt-5'>{error.data}</p>
        </div>
    );
};

export default ErrorPage;