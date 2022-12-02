import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../Spinner/Spinner';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {
    const {data: users, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
           const res = await fetch('https://enhance-server.vercel.app/users');
           const data = await res.json();
           return data;
        }
    })
    console.log(users);
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl min-h-screen'>
        <Helmet>
            <title>My Users - Enhance</title>
        </Helmet>

        {
            isLoading ? <div className='custom-align'><Spinner></Spinner></div>
                :

                users.length === 0 ?
                    <p className='text-5xl mx-auto custom-align'>No users were added...</p>
                    :
                    <div className="overflow-x-auto relative rounded-lg hidden md:block">
                        <table className="table w-full">
                            <thead className="text-xs uppercase">
                                <tr>
                                    <th scope="col" className="">
                                        Name
                                    </th>
                                    <th scope="col" className="">
                                        Email
                                    </th>
                                    <th scope="col" className="">
                                        Photo
                                    </th>
                                    <th scope="col" className="">
                                        Total Orders
                                    </th>
                                    <th scope="col" className="">
                                        Reviews
                                    </th>
                                    <th scope="col" className="">
                                        Created Time
                                    </th>
                                    <th scope="col" className="">
                                        Verification
                                    </th>
                                    <th scope="col" className="">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map(user => <AllBuyersRow
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