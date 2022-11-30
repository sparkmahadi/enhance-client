import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/UserContext';
import { Helmet } from 'react-helmet-async';
import Spinner from '../Spinner/Spinner';

const Login = () => {

    const [error, setError] = useState('');
    const { logIn, logInWithGoogle, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(r => {
                const user = r.user;
                console.log(user);
                form.reset();
                setError('');

                const currentUser = {
                    email: user.email
                }

                // jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('enhance-token', data.token);
                        navigate(from, { replace: true });
                    })

            })
            .catch(e => {
                console.log(e);
                setError(e.message);
                setLoading(false);
            })
    }
    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(r => {
                const user = r.user;
                console.log(user);
                setError('');
                const currentUser = {
                    email: user.email
                }

                // jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('enhance-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => {
                console.log(e);
                setError(e.message);
                setLoading(false);
            })
            
    }
    return (
        <div>
            <Helmet>
                <title>Login - Enhance</title>
            </Helmet>
            <h2 className='titles-bg p-2 text-white text-center text-2xl font-semibold'>Log in...</h2>

            <div className='min-h-screen'>
                {
                    loading ?
                        <div className='custom-align'><Spinner></Spinner></div>
                        :

                        <div className='mx-5'>
                            <form onSubmit={handleSubmit} className='container mx-auto my-5 second-bg px-5 lg:px-10 py-10 rounded-lg text-white md:w-2/3 lg:w-1/2'>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                                <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Email" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-lg font-medium">Your password</label>
                                <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder='Enter Your Password' required />
                            </div>

                            <p className='text-red-600 mb-2'>{error}</p>
                           
                            <p className='pb-2'>New to the site? Please <Link className='text-sky-500 font-semibold' to='/register'>Register</Link> Now!</p>

                            <button type="submit" className="text-white btn-bg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-1">Login</button>
                            <div>
                                <div onClick={handleGoogleLogin} className='cursor-pointer flex btn-bg justify-center p-2 rounded-md mt-2 lg:w-1/2 mx-auto'>
                                    <FcGoogle className='w-6 h-6' />
                                    <h2 className='ml-2'>Continue with Google</h2>
                                </div>
                            </div>
                        </form>
                        </div>
                }
            </div>

        </div>
    );
};

export default Login;