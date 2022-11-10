import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { Helmet } from 'react-helmet-async';
import Spinner from '../Spinner/Spinner';

const Register = () => {
    const [error, setError] = useState('');
    const { createNewUser, loading } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then(r => {
                const user = r.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Register - Enhance</title>
            </Helmet>
            <h2 className='titles-bg p-2 text-white text-center text-2xl font-semibold uppercase'>Registration...</h2>

            <div className='min-h-screen'>
                {
                    loading ?
                        <div className='custom-align'><Spinner></Spinner></div>
                        :

                        <div className='mx-5'>
                            <form onSubmit={handleSubmit} className='container mx-auto second-bg px-5 md:px-10 py-10 my-5 rounded-lg text-white w-full md:w-2/3 lg:w-1/2'>

                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-lg font-medium">Your Full Name:</label>
                                    <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Full Name" required />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Email" required />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-lg font-medium">Your password</label>
                                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder='Enter Your Password' required />
                                </div>
                                <p className='text-red-600 mb-2'>{error}</p>
                                <p className='pb-2'>Already have an account? Please <Link className='text-sky-300 font-semibold' to='/login'>Login</Link> Now!</p>

                                <button type="submit" className="text-white btn-bg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2">Register</button>
                            </form>
                        </div>
                }
            </div>
        </div >
    );
};

export default Register;