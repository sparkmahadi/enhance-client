import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsRow = ({review, deleteHandlerForUI}) => {
    const {_id, serviceName, reviewTitle, description} = review;

    return (
        <tr className="">
            <th scope="row" className=" font-medium">
                {serviceName}
            </th>
            <td className="">
                {reviewTitle}
            </td>
            <td title={description} className="">
                {description.slice(0,20)}...
            </td>
            <td className=" md:flex">
                <button onClick={()=>deleteHandlerForUI(_id, serviceName)} className='btn btn-error btn-sm p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
                <Link to={`/dashboard/review/${_id}`}><button className='btn btn-success btn-sm p-1 md:p-2 rounded-lg text-white'>Edit</button></Link>
            </td>
        </tr>
    );
};

export default MyReviewsRow;