import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsRow = ({review, deleteHandlerForUI}) => {
    const {_id, serviceName, reviewTitle, description} = review;

    const handleDeleteReview = (_id) =>{
        const agree = window.confirm(`Are you sure to delete the review on "${serviceName}"`)
        if(agree){

            deleteHandlerForUI(_id);

            
        }

    }

    return (
        <tr className="bg-white border-b second-bg text-white">
            <th scope="row" className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 font-medium">
                {serviceName}
            </th>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
                {reviewTitle}
            </td>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
                {description}
            </td>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
                <button onClick={()=>handleDeleteReview(_id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
                <Link to={`/review/${_id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white'>Edit</button></Link>
            </td>
        </tr>
    );
};

export default MyReviewsRow;