import React from 'react';

const Contact = () => {
    return (
        <div className='py-8 mb-10'>
            <h2 className='text-xl font-bold mb-3 text-center'>Get in touch with us</h2>
            <p className='px-4 lg:px-32 text-justify'>We'd love to hear from you! Whether you have a question, feedback, or just want to share your love for books, feel free to reach out always!!
            </p>
            <div className='lg:w-1/3 px-5 lg:px-0 mx-auto mt-5 space-y-2'>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" />
                </label>
                <textarea
                    placeholder="Type your message..."
                    className="textarea textarea-bordered textarea-md w-full">
                </textarea>
                <button className='bg-[#23BE0A] rounded-lg py-2 px-4 text-white font-medium'>Send Your Message</button>
            </div>
            <div className='mt-20 px-4 lg:px-32'>
                <h2 className='text-xl font-bold mb-6 text-center'>Frequently Asked Questions (FAQ)</h2>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-lg font-medium">1. How can I search for a specific book on your website?</div>
                        <div className="collapse-content">
                            <p className='text-left'>You can search for a specific book using the search bar located at the top of our homepage. Simply enter the title, author, or genre of the book you’re looking for, and our search engine will display the most relevant results.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">2. Can I leave reviews and ratings for books I've read?</div>
                        <div className="collapse-content">
                            <p className='text-left'>Yes, you can! To leave a review or rating, you need to create an account or log in if you already have one. Once logged in, navigate to the book's detail page and you will find an option to leave your review and rate the book based on your reading experience.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">3. How can I join a book club or community discussion?</div>
                        <div className="collapse-content">
                            <p className='text-left'>To join a book club or participate in community discussions, you need to register and log into your account. After logging in, visit the Community section where you will find various book clubs and discussion groups. Join the ones that interest you and start connecting with other book lovers!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">4. Do you offer any exclusive content or promotions?</div>
                        <div className="collapse-content">
                            <p className='text-left'>Yes, we frequently partner with independent bookstores and authors to bring you exclusive content, including author interviews, book previews, and special promotions. Subscribe to our newsletter and follow us on social media to stay updated on the latest exclusives and offers.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-lg font-medium">5. How can I contact customer support if I have an issue or question?</div>
                        <div className="collapse-content">
                            <p className='text-left'>If you have any issues or questions, you can contact our customer support team via email at <span className='text-cyan-500'>support@bookhaven.com</span> or by phone at <span className='text-cyan-500'>+1 (800) 123-4567</span>. Our support team is available Monday to Friday, from 9 AM to 5 PM EST. You can also fill out the contact form on our Contact page, and we will get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;