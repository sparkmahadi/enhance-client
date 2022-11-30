import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../Spinner/Spinner';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {
    const {data: users, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
           const res = await fetch('http://localhost:5000/users');
           const data = await res.json();
           return data;
        }
    })
    console.log(users);
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-5 md:px-10 lg:px-8 mx-auto my-5 min-h-screen'>
        <Helmet>
            <title>My Users - Enhance</title>
        </Helmet>

        {
            isLoading ? <div className='custom-align'><Spinner></Spinner></div>
                :

                users.length === 0 ?
                    <p className='text-5xl mx-auto custom-align'>No users were added...</p>
                    :
                    <div className="overflow-x-auto relative rounded-lg">
                        <table className="w-full text-sm text-left text-gray-400 md:block">
                            <thead className="text-xs uppercase second-bg text-white">
                                <tr>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Name
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Email
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Photo
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Total Orders
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Reviews
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Created Time
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Verification
                                    </th>
                                    <th scope="col" className="py-3 lg:px-6 text-center border border-sky-200">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <AllBuyersRow
                                        key={user._id}
                                        user={user}
                                    ></AllBuyersRow>)
                                }
                            </tbody>
                        </table>
                    </div>
        }

    </div>
    );
};

export default AllBuyers;