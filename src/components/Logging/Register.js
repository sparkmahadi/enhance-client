import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { Helmet } from 'react-helmet-async';
import Spinner from '../Spinner/Spinner';
import { format } from 'date-fns'
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState('');
    const { createNewUser, updateUserProfile, loading } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    // const [token] = useSetToken(userEmail);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        let photoURL = '';
        const image = form.photo.files[0];
        const formData = new FormData();
        formData.append('image', image);
        // const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                if (imageData.success) {
                    photoURL = imageData.data.url;
                    // creating user after uploading the image
                    createNewUser(email, password)
                        .then(r => {
                            const user = r.user;
                            console.log(user);
                            setError('');
                            form.reset();
                            handleUpdateUserProfile(name, photoURL);
                            if (user) {
                                saveUser(name, email, photoURL);
                            }
                        })
                        .catch(e => {
                            console.error(e);
                            setError(e.message);
                        })


                }
            })



    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    const saveUser = (name, email, photoURL) => {
        const createdUser = {
            name: name,
            email: email,
            img: photoURL,
            totalOrder: 0,
            verified: false,
            reviews: [],
            createdTime: format(new Date(), 'Pp')
        }

        fetch('https://enhance-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createdUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Account Registered Successfully");
                    setUserEmail(email);
                }
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
                                    <label htmlFor="photoURL" className="block mb-2 text-lg font-medium">Your Photo</label>
                                    <input type="file" name='photoURL' id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Full Name" />
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