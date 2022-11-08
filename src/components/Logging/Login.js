import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <h2 data-aos="fade-right" data-aos-duration="1000" className='bg-sky-600 p-2 text-white text-center text-2xl font-semibold'>Log in...</h2>

            <form data-aos="fade-left" data-aos-duration="1000" className='container mx-auto bg-white px-5 px-10 py-10 rounded-lg text-gray-900 md:w-2/3 lg:w-1/2'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-lg font-medium">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder='Enter Your Password' required />
                </div>

                <p className='text-red-600 mb-2'>error</p>
                <p className='pb-2'>New to the site? Please <Link className='text-blue-700 font-semibold' to='/register'>Register</Link> Now!</p>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Login</button>
                <p className='py-2 text-center'>Forgot Password? <Link to='/reset-password' className='text-blue-700 font-semibold'>Reset</Link> Your Password.</p>
                <div>
                    <div className='cursor-pointer flex bg-gray-200 justify-center p-2 rounded-md mt-2 lg:w-1/2 mx-auto'>
                        <FcGoogle className='w-6 h-6' />
                        <h2 className='ml-2'>Continue with Google</h2>
                    </div>
                    <div className='cursor-pointer flex bg-gray-200 justify-center p-2 rounded-md mt-2 lg:w-1/2 mx-auto'>
                        <FaGithub className='w-6 h-6' />
                        <h2 className='ml-2'>Continue with Github</h2>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;