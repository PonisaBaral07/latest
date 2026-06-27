import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaTiktok, FaInstagram, FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {isAuthenticated,user,Logout}=useAuth0();
  console.log(isAuthenticated,user);
  return (
    <header className="flex p-5 px-10 shadow-2xl w-full gap-40 ">
      <div className="flex gap-2 items-center ">
        <img className="h-12.25 w-12.25" src="momo.png" alt="" />
        <h2 className="text-[#0C6967] bold text-[25px] ">momos</h2>
      </div>
      <div className="flex items-center gap-8 px-10">
        <NavLink className="hover:text-orange-400 text-gray-500" to="/about">
          About Us
        </NavLink>
        <NavLink className="hover:text-orange-400 text-gray-500" to="/menu">
          Our Menu
        </NavLink>
        <NavLink className="hover:text-orange-400 text-gray-500" to="/services">
          Our Services
        </NavLink>
        <NavLink
          className="hover:text-orange-400 text-gray-500"
          to="allergy-advice"
        >
          Allergy Advice
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <FaFacebook className="h-7.5 w-7.5 text-gray-500 hover:text-orange-400" />
        <FaTiktok className="h-7.5 w-7.5  text-gray-500  hover:text-orange-400" />
        <FaInstagram className="h-7.5 w-7.5  text-gray-500  hover:text-orange-400" />
        <NavLink className="py-3 px-6 bg-orange-500 rounded-full text-white ">
          Contact Us
        </NavLink>
        <NavLink to="/Cart">
          <FaCartPlus size={30} className="hover:text-orange-600" />
        </NavLink>


        {isAuthenticated&&user?(
          <>
          <button
           onClick={()=>{
          Logout({ logoutParams: { returnTo: window.location.origin}})
        }}
        className="bg-amber-600 px-4 py-2 rounded-2xl active:scale-95 text-white">
          Logout
          </button>
          <NavLink to="/profile" className="hover:text-orange-600" >
          Profile
        </NavLink>
        </>
        )
        :(
        <NavLink to="/login" className="hover:text-orange-600" >
          Login
        </NavLink>
        
      )}
      </div>
    </header>
  );
};

export default Navbar;
