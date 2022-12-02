import React from 'react';

const AllBuyersRow = ({user, handleDeleteUser}) => {
    const {name, email, img, totalOrder, verified, reviews, createdTime, _id} = user;
    return (
        <tr className="">
        <th scope="row" className=" font-medium">
            name
        </th>
        <td className="">
            {email}
        </td>
        <td className="">
            <img className='w-10 h-10' src={img} alt="" />
        </td>
        <td className=" break-words">
            {totalOrder}
        </td>
        <td className=" break-words">
            {reviews}
        </td>
        <td className=" break-words">
            {createdTime}
        </td>
        <td className=" break-words">
            {verified}
            <button className='btn btn-success btn-sm text-white'>Verify</button>
        </td>
        <td className="">
            <button onClick={()=>handleDeleteUser(_id)} className='btn btn-error btn-sm text-white'>Delete</button>
        </td>
    </tr>
    );
};

export default AllBuyersRow;