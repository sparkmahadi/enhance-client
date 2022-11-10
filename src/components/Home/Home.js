import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './HomeChilds/Banner';
import Services from './HomeChilds/Services';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import './Home.css'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const services = useLoaderData();
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-5'>
            <Helmet>
                <title>Home - Enhance</title>
            </Helmet>

            <div className='my-10'>
                <div className="relative w-full">
                    <div className='banner-img'>
                        <img src='../../banner.jpg' alt="" className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-40 top-1/4">
                        <h1 className='text-5xl font-bold text-white'>
                            Home <br />
                            Interior Designing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 right-20 top-1/2">
                        <p className='text-xl text-white'>I take pride in my clients.
                            I know that my success depends on their
                            satisfaction and I work hard to make sure
                            each and every one of my clients is happy
                            with the service they receive.</p>
                    </div>
                </div>
            </div>

            <div className='sm:p-12 second-bg text-gray-100 rounded-lg mb-10'>
                <h2 className='titles-bg text-white px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>Services</h2>
                <div className='grid lg:grid-cols-3 gap-10 py-10'>
                    {
                        services.map(service => <Services key={service._id} service={service} setLoading={setLoading}></Services>)
                    }

                </div>
                <Link to='/services'><button className='mx-auto block btn-bg text-white px-5 py-2 rounded-lg text-xl'>See All...</button></Link>
            </div>


            <section className="pb-10 sm:p-12 second-bg text-gray-100 rounded-lg mb-10">
                <h2 className='titles-bg text-white px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-2xl uppercase text-center rounded-lg'>My Process</h2>
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="font-serif text-lg lg:px-36">When it comes to interior design, there is no single right or wrong way to go about it. However, there are certain steps that should always be taken during the process, in order to ensure that the end result is a beautiful and functional space.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col titles-bg rounded-lg">
                            <div className="flex flex-col  p-6">
                                <h3 className=" py-2 text-xl font-semibold text-center">Discuss</h3>
                                <div className="pt-3 space-x-2 text-md text-center">
                                    <span>I am very transparent when we discuss with our clients.</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col titles-bg rounded-lg">
                            <div className="flex flex-col  p-6">
                                <h3 className=" py-2 text-xl font-semibold text-center">Decide</h3>
                                <div className="pt-3 space-x-2 text-md text-center">
                                    <span>After discussion, I collect client's requirements and decide & execute the designs.</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col titles-bg rounded-lg">
                            <div className="flex flex-col  p-6">
                                <h3 className=" py-2 text-xl font-semibold text-center">Design</h3>
                                <div className="pt-3 space-x-2 text-md text-center">
                                    <span>As highly skilled architect and designer, I make client's dreams come true</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col titles-bg rounded-lg">
                            <div className="flex flex-col  p-6">
                                <h3 className=" py-2 text-xl font-semibold text-center">Deliver</h3>
                                <div className="pt-3 space-x-2 text-md text-center">
                                    <span>With careful execution and design, I deliver a unique and stylish living space that fits the needs of my clients.</span>
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