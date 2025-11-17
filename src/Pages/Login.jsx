import { Car, Lock, Mail } from "lucide-react";
import React from "react";
import ScrollReveal from "scrollreveal";

const Login = () => {
  return (
    <div className="py-14 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 px-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="text-white text-3xl font-bold flex justify-center items-center gap-2">
          <Car className="w-10 h-10" />
          <span>AutoRent</span>
        </div>
      </div>
      <div className="w-full max-w-md font-bold bg-gray-100 rounded-lg shadow-lg p-8 pt-5">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
