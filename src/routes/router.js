import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Logging/Login";
import Register from "../components/Logging/Register";
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateReview from "../components/MyReviews/UpdateReview";
import Profile from "../components/Profile/Profile";
import Main from "../layout/Main";
import ServiceDetails from './../components/ServiceDetails/ServiceDetails';
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/')
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/MyReviews/:email',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/MyReviews/${params.email}`)
            },
            {
                path: '/review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;