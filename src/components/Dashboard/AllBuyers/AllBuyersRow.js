import React from 'react';

const AllBuyersRow = ({user, handleDeleteUser}) => {
    const {name, email, img, totalOrder, verified, reviews, createdTime, _id} = user;
    return (
        <tr className="bg-white border-b second-bg text-white">
        <th scope="row" className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 font-medium">
            name
        </th>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
            {email}
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200">
            <img src={img} alt="" />
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
            {totalOrder}
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
            {reviews}
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
            {createdTime}
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 break-words">
            {verified}
            <button className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Verify</button>
        </td>
        <td className="py-4 px-1 lg:px-6 text-center border-x border-sky-200 md:flex">
            <button onClick={()=>handleDeleteUser(_id)} className='btn bg-red-800 p-1 md:p-2 rounded-lg text-white mr-2 mb-2 md:mb-0'>Delete</button>
        </td>
    </tr>
    );
};

export default AllBuyersRow;