import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const AddReview = ({ id, name, reviewAddingHandler }) => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [userReview, setUserReview] = useState({});

    useEffect(() => {
        if (user.photoURL) {
            const newReview = { ...userReview };
            newReview.reviewerImg = user.photoURL;
            setUserReview(newReview);
        }
        if (user.email) {
            const newReview = { ...userReview };
            newReview.reviewerEmail = user.email;
            setUserReview(newReview);
        }
    }, [user.photoURL, user.email])

    const handleUpdateReview = event => {
        event.preventDefault();

        console.log(userReview);

        reviewAddingHandler(userReview);

        fetch(`http://localhost:5000/services/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('review added')
                    event.target.reset();
                }
            })

    }
    // console.log(storedReview);

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...userReview };
        newReview[field] = value;
        newReview.serviceId = id;
        newReview.serviceName = name;
        setUserReview(newReview);
    }
    // console.log(userReview);
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center mb-5">Your opinion matters!</h2>

                    <div className="flex flex-col w-full">
                        <form onSubmit={handleUpdateReview}>
                            <input onBlur={handleInputChange} type="text" name='reviewerName' className='mb-5 rounded-lg w-1/2 mx-auto block p-2 text-gray-100 bg-gray-800' placeholder='Your Name' />
                            <input onBlur={handleInputChange} type="text" name='reviewTitle' className='mb-5 rounded-lg w-1/2 mx-auto block p-2 text-gray-100 bg-gray-800' placeholder='Your Feedback Title' />
                            <textarea onBlur={handleInputChange} name='description' rows="3" placeholder="Comments..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-800 className='mb-5 rounded-lg w-1/2 mx-auto block p-2'"></textarea>
                            <button type="submit" className="p-4 my-8 font-semibold rounded-md text-white bg-violet-800 block mx-auto">Leave feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;