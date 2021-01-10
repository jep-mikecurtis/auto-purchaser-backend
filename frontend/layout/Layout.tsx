import React from 'react';
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <div className="bg-gray-800 h-screen text-gray-100 flex flex-col">
            <nav className="py-2">
                <div className="container mx-auto flex justify-between">
                    <ul>
                        <li>
                            <Link to="/" className="text-gray-100 hover:text-gray-300">DevTest</Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/login" className="text-gray-100 hover:text-gray-300">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-gray-100 hover:text-gray-300">Register</Link>
                        </li>
                    </ul>
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
