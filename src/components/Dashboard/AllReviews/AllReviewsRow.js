import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const AllReviewsRow = ({review, idx, handleDeleteReview}) => {
    const {description, reviewerEmail, reviewTitle, serviceId, serviceName, reviewerName, createdAt, _id} = review;
    return (
        <tr className="">
            <th scope="row" className=" font-medium">
                {idx}
            </th>
            <th scope="row" className=" font-medium">
                {reviewerEmail}
            </th>
            <td className="">
                {reviewTitle}
            </td>
            <td className="">
                {description}
            </td>
            <td className=" break-words">
                {serviceName}
            </td>
            <td className=" break-words">
                {reviewerName}
            </td>
            <td className=" break-words">
                {format(createdAt, 'Pp')}
            </td>
            <td className=" md:flex">
                <Link to={`/review/${_id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white mr-2'>Update</button></Link>
                <button onClick={()=>handleDeleteReview(_id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mb-2 md:mb-0'>Delete</button>
            </td>
        </tr>
    );
};

export default AllReviewsRow;