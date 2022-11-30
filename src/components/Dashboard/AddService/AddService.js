import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../contexts/UserContext';

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handleSubmit = event => {
        const userEmail = user.email;

        event.preventDefault(); 
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const img = form.img.value;
        const price = form.price.value;

        const service = { name, description, img, price, userEmail};
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Service is added successfully!')
                }
            })


    }

    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl p-5 md:p-10 lg:p-8 mx-auto'>
            <Helmet>
                <title>Add Service - Enhance</title>
            </Helmet>
            <div className="flex flex-col p-6 rounded-md sm:p-10 second-bg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-2xl lg:text-4xl font-bold text-gray-100">Add A New Service</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid lg:px-36">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-md text-gray-100">Service Name</label>
                            <input type="name" name="name" id="name" placeholder="Enter Service Name" className="w-full px-3 py-2 border rounded-md border-gray-700" required />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-md text-gray-100">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter Description" className="w-full px-3 py-2 border rounded-md border-gray-700" required />
                        </div>
                        <div>
                            <label htmlFor="img" className="block mb-2 text-md text-gray-100">ImageURL</label>
                            <input type="text" name="img" id="img" placeholder="Enter Image URL" className="w-full px-3 py-2 border rounded-md border-gray-700" required />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-md text-gray-100">Price</label>
                            <input type="number" name="price" id="price" placeholder="Enter Price" className="w-full px-3 py-2 border rounded-md border-gray-700" required />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="md:w-1/3 mx-auto block px-5 py-1 font-semibold rounded-md btn-bg text-white text-lg">Add Service</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;