import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const Login = () => {
  const {login,isAuthenticated,user,isLoading}=  useAuth0();
  console.log(user);
  const navigate=useNavigate();

  useEffect(()=>{
    if(user&&isAuthenticated){
        localStorage.setItem("user",JSON.stringify(user));

        navigate("/");
    }
  },[user,isAuthenticated,navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-4xl">
            🔒
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
    
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>

          <span className="mx-4 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-grow border-t"></div>
        </div>

        {/* Google Login */}
        <button
        onClick={loginWithRedirect}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition duration-300"
        >
          <FcGoogle size={24} />
          <span className="font-medium">
            Continue with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;