import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
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
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/MyReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`https://enhance-server.vercel.app/review/${params.id}`)
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
    }
])

export default router;