import React from 'react';
import { useState, useContext} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/UserContext';

const AddReview = ({ id, name, reviewAddingHandler }) => {
    const { user } = useContext(AuthContext);
    const [userReview, setUserReview] = useState({});

    const handleAddReview = event => {
        event.preventDefault();
        reviewAddingHandler(userReview);
        fetch(`https://enhance-server.vercel.app/services/${id}`, {
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
                    toast.success('Review added succesfully');
                    event.target.reset();
                }
            })

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...userReview };
        newReview[field] = value;
        newReview.reviewerName = user?.displayName;
        newReview.serviceId = id;
        newReview.serviceName = name;
        newReview.reviewerEmail = user.email;
        newReview.reviewerImg = user.photoURL;
        setUserReview(newReview);
    }
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-slate-700 text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-xl lg:text-2xl text-center mb-5">Your opinion matters!</h2>

                    <div className="flex flex-col w-full">
                        <form onSubmit={handleAddReview}>
                            <input onBlur={handleInputChange} type="text" name='reviewTitle' className='mb-5 rounded-lg w-1/2 mx-auto block p-2 text-gray-100 bg-gray-800' placeholder='Your Feedback Title' required />
                            <textarea onBlur={handleInputChange} name='description' rows="3" placeholder="Comments..." className=" text-gray-100 bg-gray-800 className='mb-5 rounded-lg w-1/2 mx-auto block p-2" required>
                            </textarea>
                            <button type="submit" className="px-4 py-2 my-8 font-semibold rounded-lg text-white btn-bg block mx-auto">Leave feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;