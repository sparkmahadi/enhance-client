import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/UserContext';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const { user, loading, updateUserProfile } = useContext(AuthContext);

    useEffect(() => {
        if (!loading) {
            if (user) {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL;
                if (displayName) {
                    setName(displayName);
                }
                if (email) {
                    setEmail(email);
                }
                if (photoURL) {
                    setPhotoURL(photoURL);
                }
            }
            else {
                toast.error("You're not logged in")
            }
        }
    }, [loading, user])

    const handleUpdateUserProfile = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;

        const profile = {
            displayName: name,
            photoURL: photoURL,
            email: email
        }
        updateUserProfile(profile)
            .then(() => {
                toast.success("Profile Updated Successfully!")
            })
            .catch(e => console.error(e));
    }

    return (
        <div className='min-h-custom'>
            <Helmet>
                <title>My Profile - Enhance</title>
            </Helmet>
            <form onSubmit={handleUpdateUserProfile} className='container mx-auto bg-white px-10 py-10 rounded-lg md:w-2/3 lg:w-1/2'>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-lg font-medium">Your Full Name:</label>
                    <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={name} required />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={email} required />
                </div>

                <div className="mb-6">
                    <label htmlFor="photoURL" className="block mb-2 text-lg font-medium">Your Photo URL</label>
                    <input type="text" name='photoURL' id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={photoURL} />
                </div>
                <button type="submit" className="btn btn-sm text-white">Update</button>
            </form>
        </div>
    );
};

export default Profile;