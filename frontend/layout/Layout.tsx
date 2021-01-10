import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    const auth  = useSelector((state: any) => state.auth);

    const logout () => {
        console.log('hit');
    }

    return (
        <div className="bg-gray-800 h-screen text-gray-100 flex flex-col">
            <nav className="py-2">
                <div className="container mx-auto flex justify-between">
                    <ul>
                        <li>
                            <Link to="/" className="text-gray-100 hover:text-gray-300">DevTest</Link>
                        </li>
                    </ul>
                    { auth.success ?
                        // IF Auth
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/dashboard" className="text-gray-100 hover:text-gray-300">Dashboard</Link>
                            </li>
                            <li>
                                <button onClick={logout} className="text-gray-100 hover:text-gray-300">Logout</button>
                            </li>
                        </ul> :
                        // Not A User
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/login" className="text-gray-100 hover:text-gray-300">Login</Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-gray-100 hover:text-gray-300">Register</Link>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
            <main className="flex-1">
                {children}
            </main>
            <footer className="text-center">
                <p>
                    Mike Curtis
                </p>
            </footer>
        </div>
    )
}

export default Layout;
