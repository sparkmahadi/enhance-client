import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersRow = ({order}) => {
    const {_id, serviceName, price, buyerLocation} = order;

    return (
        <tr className="second-bg">
            <th scope="row" className=" font-medium">
                {serviceName}
            </th>
            <td className="">
                {price}
            </td>
            <td className=" break-words">
                {buyerLocation}
            </td>
            <td className=" md:flex">
                <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-success btn-sm rounded-lg text-white'>Pay</button></Link>
            </td>
        </tr>
    );
};

export default MyOrdersRow;