import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import AddService from "../components/Dashboard/AddService/AddService";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Logging/Login";
import Register from "../components/Logging/Register";
import Profile from "../components/Profile/Profile";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import ServiceDetails from './../components/ServiceDetails/ServiceDetails';
import PrivateRoute from "./PrivateRoute";
import UpdateReview from "../components/Dashboard/MyReviews/UpdateReview";
import MyReviews from "../components/Dashboard/MyReviews/MyReviews";
import MyOrders from './../components/Dashboard/MyOrders/MyOrders';
import AllBuyers from './../components/Dashboard/AllBuyers/AllBuyers';
import AllReviews from './../components/Dashboard/AllReviews/AllReviews';
import MyServices from './../components/Dashboard/MyServices/MyServices';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <AllServices></AllServices>
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/dashboard/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/dashboard/review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myServices',
                element: <MyServices></MyServices>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/AllReviews',
                element: <AllReviews></AllReviews>
            },
        ]
    }
])

export default router;