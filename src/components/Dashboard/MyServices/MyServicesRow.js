import React from 'react';
import { Link } from 'react-router-dom';

const MyServicesRow = ({service, idx}) => {
    const {description, img, name, price, _id} = service;
    console.log(service);

    const handleDeleteService = id =>{

    }
    return (
        <tr className="bg-white border-b second-bg text-white">
            <th scope="row" className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 font-medium">
                {idx}
            </th>
            <th scope="row" className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 font-medium">
                {name}
            </th>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
                order
            </td>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
                reviews
            </td>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
                {price}
            </td>
            <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 md:flex">
                <Link to={`/review/${_id}`}><button className='btn bg-green-800 p-1 md:p-2 rounded-lg text-white mr-2'>Update</button></Link>
                <button onClick={()=>handleDeleteService(_id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mb-2 md:mb-0'>Delete</button>
            </td>
        </tr>
    );
};

export default MyServicesRow;