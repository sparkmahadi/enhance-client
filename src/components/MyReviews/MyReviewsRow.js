import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsRow = ({review, deleteHandlerForUI}) => {
    const {_id, serviceName, reviewTitle, description} = review;

    const handleDeleteReview = (_id) =>{
        const agree = window.confirm(`Are you sure to delete the review on "${serviceName}"`)
        if(agree){

            deleteHandlerForUI(_id);

            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Review is deleted');
                }
                console.log(data);
            })
        }

    }

    const handleUpdateReview = (_id) =>{

    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 text-center border-x border-sky-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {serviceName}
            </th>
            <td className="py-4 px-6 text-center border-x border-sky-200">
                {reviewTitle}
            </td>
            <td className="py-4 px-6 text-center border-x border-sky-200">
                {description}
            </td>
            <td className="py-4 px-6 text-center border-x border-sky-200">
                <button onClick={()=>handleDeleteReview(_id)} className='btn bg-red-800 p-2 rounded-lg text-white mr-2'>Delete</button>
                <Link to={`/review/${_id}`}><button onClick={()=>handleUpdateReview(_id)} className='btn bg-green-800 p-2 rounded-lg text-white'>Update</button></Link>
            </td>
        </tr>
    );
};

export default MyReviewsRow;