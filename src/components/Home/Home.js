import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './HomeChilds/Banner';
import Services from './HomeChilds/Services';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const services = useLoaderData();
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-5'>
            <Helmet>
                <title>Home - Enhance</title>
            </Helmet>
            <img src="../../banner.png" className='w-full pb-10' alt="" />
            <div className='sm:p-12 bg-slate-500 text-gray-100 rounded-lg mb-10'>
                <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>My Services</h2>
                <div className='grid lg:grid-cols-3 gap-10 py-10'>
                    {
                        services.map(service => <Services key={service._id} service={service} setLoading={setLoading}></Services>)
                    }

                </div>
                <Link to='/services'><button className='mx-auto block bg-gray-600 text-white p-2 rounded-lg text-xl'>See All</button></Link>
            </div>


            <section className="pb-10 sm:p-12 bg-slate-500 text-gray-100 rounded-lg mb-10">
                <h2 className='bg-gray-800 text-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>My Process</h2>
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="font-serif text-sm lg:px-36">When it comes to interior design, there is no single right or wrong way to go about it. However, there are certain steps that should always be taken during the process, in order to ensure that the end result is a beautiful and functional space.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col bg-gray-900 rounded-lg">
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Discuss</h3>
                                <div className="pt-3 space-x-2 text-xs">
                                    <span>I am very transparent when we discuss with our clients.</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 rounded-lg">
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Decide</h3>
                                <div className="pt-3 space-x-2 text-xs">
                                    <span>After discussion, I collect their requirements and decide & execute the designs.</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 rounded-lg">
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Design</h3>
                                <div className="pt-3 space-x-2 text-xs">
                                    <span>As highly skilled architect and designer, I make clients’ dreams come true</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-900 rounded-lg">
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Deliver</h3>
                                <div className="pt-3 space-x-2 text-xs">
                                    <span>With careful execution and design, I deliver a unique and stylish living space that fits the needs of our clients.</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;