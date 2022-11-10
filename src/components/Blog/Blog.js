import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='blog-div min-h-screen second-bg m-5 rounded-lg md:m-10 lg:m-0 lg:rounded-none'>
            <Helmet>
                <title>Blog - Enhance</title>
            </Helmet>
            <section>
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-xl lg:text-3xl font-bold text-center titles-bg p-2 rounded-lg text-white lg:mx-32">Blog : (Database, NodeJS and JWT)</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300 text-white">


                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold lg:text-lg">What are the difference between SQL and NoSQL?
                            </summary>
                            <div className="px-4 pb-4 text-sm lg:text-md">
                                <ul className='list-disc list-inside'>
                                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                                </ul>
                            </div >
                        </details >

                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold lg:text-lg">What is JWT, and how does it work?</summary>
                            <div className="px-4 pb-4 text-sm lg:text-md">
                                <p>JWT: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                                <p className='pb-5'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                                <img className='mx-auto rounded-lg pb-5' src="https://i.ibb.co/SX3yjXT/jwt.png" alt="" />

                                <ul className='list-disc list-inside'>
                                    <li>User sign-in using username and password or google/facebook.</li>
                                    <li> Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                                    <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                                    <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                                </ul>
                            </div >
                        </details >


                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold lg:text-lg">What is the difference between javascript and NodeJS?</summary>
                            <div className="px-4 pb-4 text-sm lg:text-md">
                                <div className="overflow-x-auto relative rounded-lg border border-sky-200">
                                    <table className="w-full text-sm lg:text-md text-left text-white ">
                                        <thead className="text-xs uppercase bg-gray-700 text-white">
                                            <tr>
                                                <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                                    Javascript
                                                </th>
                                                <th scope="col" className="py-3 px-6 text-center border border-sky-200">
                                                    NodeJS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b bg-gray-800 border-gray-700">
                                                <td className="py-4 px-6 text-center border-x border-sky-200 text-white">
                                                    Javascript is a programming language that is used for writing scripts on the website.
                                                </td>
                                                <td className="py-4 px-6 text-center border-x border-sky-200">
                                                    NodeJS is a Javascript runtime environment.
                                                </td>
                                            </tr>

                                            <tr className="border-b bg-gray-800 border-gray-700">
                                                <td className="py-4 px-6 text-center border-x border-sky-200 text-white">
                                                    It is basically used on the client-side.</td>
                                                <td className="py-4 px-6 text-center border-x border-sky-200">
                                                    It is mostly used on the server-side.</td>
                                            </tr>
                                            <tr className="border-b bg-gray-800 border-gray-700">
                                                <td className="py-4 px-6 text-center border-x border-sky-200 text-white">
                                                    Javascript can only be run in the browsers.</td>
                                                <td className="py-4 px-6 text-center border-x border-sky-200">
                                                    We can run Javascript outside the browser with the help of NodeJS.</td>
                                            </tr>
                                            <tr className="border-b bg-gray-800 border-gray-700">
                                                <td className="py-4 px-6 text-center border-x border-sky-200 text-white">
                                                    Javascript is capable enough to add HTML and play with the DOM. </td>
                                                <td className="py-4 px-6 text-center border-x border-sky-200">
                                                    Nodejs does not have capability to add HTML tags.
                                                </td>
                                            </tr>
                                            <tr className="border-b bg-gray-800 border-gray-700">
                                                <td className="py-4 px-6 text-center border-x border-sky-200 text-white">
                                                    It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                                <td className="py-4 px-6 text-center border-x border-sky-200">
                                                    Nodejs is written in C, C++ and Javascript.
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div >
                        </details >

                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold lg:text-lg">How does NodeJS handle multiple requests at the same time?</summary>
                            <div className="px-4 pb-4 text-sm lg:text-md">
                                <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                                    So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                                    The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
                            </div >
                        </details >


                    </div>
                </div>
            </section>
        </div>

    );
};

export default Blog;