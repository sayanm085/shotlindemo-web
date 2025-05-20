import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth, useLogout} from "@/api/UserAuth.api"; // Import authentication hook

import logo from './shotlin32.png'; // Import your logo


function Header() {
  const [show, setShow] = useState(false);
  const { data: user, isLoading, isError, refetch } = useAuth(); // Fetch user data

  const handleShow = () => {
    setShow(!show);
  };

  /**
   * Close menu when clicking outside
   */
  const handleClickOutside = (event) => {
    if (event.target.closest("header") === null) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Using useLogout hook in your component
     const { mutate } = useLogout();
 
 
     const handleLogout = () => {
         mutate(null, {
             onSuccess: () => {
             console.log("Logout Successful");
             },
             onError: (error) => {
             console.error("Logout failed:", error);
             },
         });
     };

  return (
    <>
      <header className="h-20 flex justify-center items-center fixed w-full left-1/2 -translate-x-1/2 mt-2 z-[1000] pointer-events-none">
        <div
          className="flex items-center justify-evenly relative bg-black w-[96%] md:w-[600px] lg:w-[800px] h-[3.85rem] rounded-xl border-[#001170] backdrop-blur-md border border-opacity-50 z-[100] pointer-events-auto"
          style={{
            background:
              "linear-gradient(rgba(74, 83, 255, 0.04) 0%, rgba(0, 9, 170, 0.19) 130%)",
          }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-12 filter " />
          </Link>

          <nav className="w-7/12">
            <ul className="ds:flex hidden items-center justify-evenly font-semibold text-sm w-full text-white">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <label className="flex flex-col gap-2 w-8 ds:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              checked={show}
              onChange={handleShow}
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
            <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45" />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
          </label>

          {/* ✅ Show Avatar if User is Logged In */}
          {user ? (
            <div className="flex items-center gap-4">
              <Avatar>
                <a href="/user/profile">
                  <AvatarImage
                    src={user?.data?.avatar || "/default-avatar.png"}
                    alt="Profile"
                  />
                  <AvatarFallback>
                    {user?.data?.fullName?.charAt(0) || "U"}
                  </AvatarFallback>
                </a>
              </Avatar>
              <Button
                className="bg-slate-50 hidden ds:flex rounded-lg py-2 px-4 text-black text-base hover:bg-slate-300 "
                variant="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            // ✅ Show "Login" Button if User is NOT Logged In
            <div className="flex items-center gap-2">
              <Button className="bg-transparent border-2 border-white text-gray-50 text-base hover:bg-slate-300 hover:text-gray-900   hidden ds:flex rounded-lg py-2 px-4 ">
                <Link to="/signin">Login</Link>
              </Button>
              <Button className="bg-blue-500  text-white text-base hover:bg-slate-300 hover:text-gray-900   hidden ds:flex rounded-lg py-2 px-4 ">
                <Link to="/signup">SignUp</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <div
          className={`absolute bg-[#003989] sm:hidden h-auto w-[96%] mt-[27rem] rounded-xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px] py-4 transition-all duration-500 ${
            show
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-[-100%] pointer-events-none"
          }`}
          style={{
            background:
              "linear-gradient(rgba(74, 83, 255, 0.04) 0%, rgba(0, 9, 170, 0.19) 130%)",
            zIndex: 1001,
          }}
        >
          <nav className="sm:hidden flex items-center justify-evenly h-full text-white font-semibold text-sm">
            <ul className="flex flex-col items-center gap-6 h-full font-semibold text-sm w-full text-white">
              <li>
                <Link to="/" className="text-white" onClick={handleShow}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white"
                  onClick={handleShow}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white" onClick={handleShow}>
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-white" onClick={handleShow}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white" onClick={handleShow}>
                  Privacy Policy
                </Link>
              </li>

              {user ? (
                // ✅ Show Logout Button when user is logged in
                <Button
                  variant="secondary"
                  className="w-[80%] bg-red-500 text-white hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                // ✅ Show Login & Signup Buttons when user is NOT logged in
                <div className="flex flex-col gap-3 w-full items-center">
                  <Button
                    variant="outline"
                    className="w-[80%] border-2 border-white text-white hover:bg-slate-300 hover:text-gray-900"
                  >
                    <Link to="/signin" className="w-full text-center">
                      Login
                    </Link>
                  </Button>
                  <Button className="w-[80%] bg-blue-500 text-white hover:bg-slate-300 hover:text-gray-900">
                    <Link to="/signup" className="w-full text-center">
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
