import React, { useState } from "react";
import { motion } from "framer-motion";
import pyramidImage from "../assets/pyramid.png";
import sphereImage from "../assets/spring.png";
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();
      console.log("Data received from API:", dataApi);

      if (dataApi.success) {
        // Handle success
        toast.success(dataApi.message);
        // Save user data to local storage or context for session management
        localStorage.setItem("user", JSON.stringify(dataApi.data));  // Save user data in localStorage
        window.scrollTo(0, 0);
        navigate('/');  // Navigate to home page after successful login
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.log("Error during login:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable button after process completes
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#d2dcff] relative overflow-hidden">
      {/* Animated 3D Shapes */}
      <motion.img
        src={pyramidImage}
        alt="Pyramid"
        className="absolute top-10 right-10 w-48 opacity-80"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />
      <motion.img
        src={sphereImage}
        alt="Sphere"
        className="absolute bottom-10 left-10 w-56 opacity-80"
        animate={{
          translateY: [-20, 20],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 6,
          ease: "easeInOut",
        }}
      />
      {/* Signin Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              placeholder="Email"
              type="text"
              className="w-full px-3 py-2 border border-gray-800"
              required
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-800"
              required
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-black text-white px-8 py-2 mt-4 font-light">
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export default Signin;
