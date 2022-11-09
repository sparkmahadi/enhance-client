import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/UserContext';

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
                if (data.acknowledged) {
                    toast.success('Service is added successfully!')
                }
            })


    }

    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:p-24 lg:p-8 mx-auto'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Add A New Service</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid lg:px-36">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Service Name</label>
                            <input type="name" name="name" id="name" placeholder="Enter Service Name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter Description" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="img" className="block mb-2 text-sm">ImageURL</label>
                            <input type="text" name="img" id="img" placeholder="Enter Image URL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm">Price</label>
                            <input type="number" name="price" id="price" placeholder="Enter Price" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-1/2 mx-auto block px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Add Service</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;