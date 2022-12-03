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
import MyReviews from "../components/Dashboard/MyReviews/MyReviews";
import MyOrders from './../components/Dashboard/MyOrders/MyOrders';
import AllBuyers from './../components/Dashboard/AllBuyers/AllBuyers';
import AllReviews from './../components/Dashboard/AllReviews/AllReviews';
import MyServices from './../components/Dashboard/MyServices/MyServices';
import AdminRoute from "./AdminRoute";
import Payment from "../components/Dashboard/Payment/Payment";
import UpdateReview from './../components/Dashboard/MyReviews/UpdateReview';
import UpdateService from './../components/Dashboard/MyServices/UpdateService';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://enhance-server.vercel.app/')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://enhance-server.vercel.app/')
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://enhance-server.vercel.app/services/${params.id}`)
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
                element: <AdminRoute><AddService></AddService></AdminRoute>
            },
            {
                path: '/dashboard/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/dashboard/review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`https://enhance-server.vercel.app/review/${params.id}`)
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myServices',
                element: <AdminRoute><MyServices></MyServices></AdminRoute>
            },
            {
                path: '/dashboard/services/update/:id',
                element: <AdminRoute><UpdateService></UpdateService></AdminRoute>,
                loader: ({params}) => fetch(`https://enhance-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allReviews',
                element: <AdminRoute><AllReviews></AllReviews></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://enhance-server.vercel.app/serviceBookings/${params.id}`)
            },
        ]
    }
])

export default router;