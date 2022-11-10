import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
import { BiUserCircle } from 'react-icons/bi';
import { AuthContext } from "../../../contexts/UserContext";
import Spinner from "../../Spinner/Spinner";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("light-theme");
    const { user, logOut, loading } = useContext(AuthContext);



    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme")
        }
        else {
            setTheme("dark-theme")
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className="nav-bg">

            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link to='/'
                        aria-label="Enhance"
                        title="Enhance"
                        className="inline-flex items-center"
                    >
                        <img className="h-8 w-8 text-white" src="https://i.ibb.co/ynnXHCP/logo.png" alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-white hover:text-sky-300 uppercase">
                            Enhance
                        </span>
                    </Link>

                    <div className="hidden lg:block">
                        {
                            loading ? <Spinner></Spinner>
                                :
                                <ul className="items-center hidden space-x-8 lg:flex">
                                    <li>
                                        <NavLink
                                            to="/home"
                                            aria-label="Home"
                                            title="Home"
                                            className={`font-medium tracking-wide text-white hover:text-sky-300`}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/Services"
                                            aria-label="Services"
                                            title="Services"
                                            className={`font-medium tracking-wide text-white hover:text-sky-300`}
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    {
                                        user?.uid ?
                                            <li>
                                                <NavLink
                                                    to="/AddService"
                                                    aria-label="AddService"
                                                    title="AddService"
                                                    className={`font-medium tracking-wide text-white hover:text-sky-300`}
                                                >
                                                    Add Service
                                                </NavLink>
                                            </li>
                                            :
                                            undefined
                                    }
                                    {
                                        user?.uid ?
                                            <li>
                                                <NavLink
                                                    to={`/MyReviews?email=${user?.email}`}
                                                    aria-label="MyReviews"
                                                    title="MyReviews"
                                                    className={`font-medium tracking-wide text-white hover:text-sky-300`}
                                                >
                                                    My Reviews
                                                </NavLink>
                                            </li>
                                            :
                                            undefined
                                    }

                                    <li>
                                        <NavLink to='/blog'
                                            aria-label="Blog"
                                            title="Blog"
                                            className="font-medium tracking-wide text-white hover:text-sky-300"
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <div    
                                            className="cursor-pointer btn-bg flex items-center justify-center gap-2 py-1 px-2 text-white hover:bg-sky-700 duration-200 rounded shadow-md"

                                        >
                                            {
                                                user?.uid ?
                                                    <div className="flex items-center">
                                                        <Link to='/profile'>
                                                            {
                                                                user?.photoURL ?
                                                                    <div className="flex items-center" title={user?.displayName ? user.displayName : 'No Name'}>
                                                                        <img className="max-w-8 max-h-8 mr-2 border border-sky-300" src={user?.photoURL} alt="" />
                                                                    </div>
                                                                    :
                                                                    <div className="flex items-center" title={user?.displayName ? user.displayName : 'No Name'}>
                                                                        <BiUserCircle className="w-7 h-7 border border-sky-300 mr-2 rounded-md" />
                                                                    </div>
                                                            }
                                                        </Link>
                                                        <button onClick={handleLogOut}>Log Out</button>
                                                    </div>
                                                    :
                                                        <Link to='/login'>Log In</Link>
                                            }
                                        </div>
                                    </li>
                                </ul>
                        }
                    </div>


                    <div className="lg:hidden flex items-center">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className="p-5 bg-white border rounded shadow-sm nav-mobile-menu">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link to='/'
                                                aria-label="Enhance"
                                                title="Enhance"
                                                className="inline-flex items-center"
                                            >
                                                {
                                                    theme === 'dark-theme' ? <img className="h-6 w-6" src="https://i.ibb.co/ynnXHCP/logo.png" alt="" />
                                                        :
                                                        <img className="h-6 w-6" src="https://i.ibb.co/ynnXHCP/logo.png" alt="" />
                                                }
                                                <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                                    Enhance
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/Services'
                                                    aria-label="Services"
                                                    title="Services"
                                                    className="font-medium tracking-wide"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>
                                            {
                                                user?.uid ?
                                                    <li>
                                                        <NavLink
                                                            to="/AddService"
                                                            aria-label="AddService"
                                                            title="AddService"
                                                            className={`font-medium tracking-wide`}
                                                        >
                                                            Add Service
                                                        </NavLink>
                                                    </li>
                                                    :
                                                    undefined
                                            }
                                            {
                                                user?.uid ?
                                                    <li>
                                                        <NavLink
                                                            to="/MyReviews"
                                                            aria-label="MyReviews"
                                                            title="MyReviews"
                                                            className={`font-medium tracking-wide`}
                                                        >
                                                            My Reviews
                                                        </NavLink>
                                                    </li>
                                                    :
                                                    undefined
                                            }

                                            <li>
                                                <NavLink to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <div to='/login'
                                                    className="cursor-pointer bg-slate-500 flex items-center justify-center gap-2 h-12 px-2 text-white hover:bg-sky-700 duration-200 rounded shadow-md"

                                                >
                                                    {
                                                        user?.uid ?
                                                            <div className="flex items-center">
                                                                <button onClick={handleLogOut}>Log Out</button>
                                                            </div>
                                                            :
                                                            <>
                                                                <Link to='/login' className="font-semibold text-lg">Log In</Link>
                                                            </>
                                                    }
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Nav;