import React from 'react';
import { Link } from 'react-router-dom';

const MyServicesRow = ({service, idx, handleDeleteService}) => {
    const {description, img, name, price, _id} = service;
    return (
        <tr className="">
            <th scope="row" className=" font-medium">
                {idx}
            </th>
            <th scope="row" className=" font-medium">
                {name}
            </th>
            <td className="">
                order
            </td>
            <td className="">
                reviews
            </td>
            <td className="break-words">
                {price}
            </td>
            <td className=" md:flex">
                <Link to={`/dashboard/services/update/${_id}`}><button className='btn btn-success btn-sm text-white mr-2'>Update</button></Link>
                <button onClick={()=>handleDeleteService(_id, name)} className='btn btn-sm btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default MyServicesRow;