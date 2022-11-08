import React from 'react';

const AddReview = () => {
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                        <button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400">Leave feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;