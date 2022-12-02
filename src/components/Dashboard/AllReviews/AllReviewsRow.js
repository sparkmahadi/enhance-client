import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const AllReviewsRow = ({review, idx, handleDeleteReview}) => {
    // const {description, reviewerEmail, reviewTitle, serviceId, serviceName, reviewerName, createdAt, _id} = review;
    const {_id, serviceName, reviewTitle, description, reviewerName} = review;
    return (
        <tr className="">
            <td className=" font-medium">
                {idx}
            </td>
            <td className=" font-medium">
                {serviceName}
            </td>
            <td className="">
                {reviewTitle}
            </td>
            <td title={description} className="">
                {description.slice(0,20)}
            </td>
            <td className=" break-words">
                {reviewerName}
            </td>
            <td className=" md:flex">
                <button onClick={()=>handleDeleteReview(_id)} className='btn btn-error btn-sm text-white mb-2 md:mb-0'>Delete</button>
            </td>
        </tr>
    );
};

export default AllReviewsRow;