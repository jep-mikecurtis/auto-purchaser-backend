import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AuthLogout } from "../redux/actions/AuthActions";

const Layout = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(AuthLogout());
  };

  return (
    <div className="bg-gray-800 h-screen text-gray-100 flex flex-col">
      <nav className="py-2">
        <div className="container mx-auto flex justify-between">
          <ul>
            <li>
              <Link to="/" className="text-gray-100 hover:text-gray-300">
                DevTest
              </Link>
            </li>
          </ul>
          {auth.success ? (
            // IF Auth
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-gray-100 hover:text-gray-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            // Not A User
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="text-gray-100 hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <main className="flex-1 flex flex-col">
        <div className="flex-1">
          <div
            className="flex flex-col items-center"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="w-full max-w-2xl relative flex flex-col mt-52">
              {children}
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center">
        <p>Mike Curtis</p>
      </footer>
    </div>
  );
};

export default Layout;
