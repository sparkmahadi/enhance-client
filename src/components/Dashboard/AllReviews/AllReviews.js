import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import Spinner from '../../Spinner/Spinner';
import { Link } from 'react-router-dom';
import MyReviewsRow from './../MyReviews/MyReviewsRow';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-toastify';

const AllReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const {data: reviews, isLoading, refetch} = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res= await fetch('http://localhost:5000/reviews');
            const data = res.json();
            return data;
        }
    })

    const handleDeleteReview = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Review is deleted successfully!!!");
                    refetch();
                }
                console.log(data);
            })
    }
    return (
        <div>
            {
                isLoading &&
                <div className='custom-align'><Spinner></Spinner></div>
            }
            
            <div className="overflow-x-auto relative rounded-lg">
                        <table className="w-full text-sm text-left hidden md:block">
                            <thead className="text-xs uppercase">
                                <tr>
                                    <th scope="col" className="">
                                        SL
                                    </th>
                                    <th scope="col" className="">
                                        Service
                                    </th>
                                    <th scope="col" className="">
                                        Total Order
                                    </th>
                                    <th scope="col" className="">
                                        Reviews
                                    </th>
                                    <th scope="col" className="">
                                        Price
                                    </th>
                                    <th scope="col" className="">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map((review, idx) => <MyReviewsRow
                                        key={review._id}
                                        idx={idx+1}
                                        review={review}
                                        handleDeleteReview={handleDeleteReview}
                                    ></MyReviewsRow>)
                                }
                            </tbody>
                        </table>


                        <div>
                            {
                                reviews.map(review =>
                                    <div key={review._id} className='py-5 px-10 second-bg text-white rounded-lg md:hidden mb-5'>
                                        <ul className='list-disc list-outside'>
                                            <li><span className='font-semibold'>Service : </span> {review.serviceName}</li>
                                            <li><span className='font-semibold'>My Feedback : </span>{review.reviewTitle}</li>
                                            <li><span className='font-semibold'>My Comments : </span> {review.description}</li>
                                            <li>Actions:
                                                <div className='px'>
                                                <button onClick={() => handleDeleteReview(review._id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
                                                <Link to={`/review/${review._id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white'>Edit</button></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
        </div>
    );
};

export default AllReviews;