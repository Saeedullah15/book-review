import React from 'react';

const AboutUs = () => {
    return (
        <div className='mb-20 pt-8'>
            <div className='px-28 mb-8'>
                <h2 className='font-bold text-xl text-center mb-3'>Mission & Vision</h2>
                <p className='text-justify'>Our mission at Book Haven is to foster a love for reading by providing a comprehensive platform where book enthusiasts can discover, review, and discuss their favorite books. We strive to create a vibrant community where readers can connect with like-minded individuals, find their next great read, and support authors from around the world. Our goal is to make reading accessible, enjoyable, and an integral part of our users' lives.
                </p>
            </div>
            <div>
                <h2 className='font-bold text-xl text-center mb-3'>History</h2>
                <p className='text-justify px-28'>Book Haven was founded in 2019 by a group of passionate readers who wanted to create a space where book lovers could come together and share their love for literature. What started as a small blog quickly grew into a comprehensive website offering a vast collection of books across various genres.
                </p>
                <ul className="timeline timeline-vertical my-10">
                    <li>
                        <div className="timeline-start">2019</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box text-sm font-medium">Launch of the initial blog to share book reviews and reading lists.</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2020</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box text-sm font-medium">Expanded to include a full-fledged book database with user reviews and ratings.</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2021</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box text-sm font-medium">Introduced community features, allowing users to create profiles, join book clubs, and participate in discussions.</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2022</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box text-sm font-medium">Partnered with independent bookstores and authors to offer exclusive content and promotions.</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2023</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box text-sm font-medium">Continued growth and development, with a focus on enhancing the user experience and expanding our book collection.</div>
                    </li>
                </ul>
                <p className='text-justify px-28'>Through the years, our commitment to promoting literacy and the joy of reading has remained unwavering. We believe that books have the power to change lives, and we are dedicated to helping our users discover the magic of reading.</p>
            </div>
        </div>
    );
};

export default AboutUs;