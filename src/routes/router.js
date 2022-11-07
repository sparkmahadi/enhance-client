import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://enhance-server.vercel.app/services')
            }
        ]
    }
])

export default router;