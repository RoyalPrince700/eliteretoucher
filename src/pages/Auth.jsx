import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context';
import cubeImage from "../assets/cylinder.png";
import waveImage from "../assets/noodle.png";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const { signUp, signIn, signInWithGoogle } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoogleAuth = async () => {
    try {
      const { error } = await signInWithGoogle();
      if (error) {
        toast.error(error.message);
      }
      // Note: The redirect will happen automatically via Supabase OAuth
    } catch (error) {
      console.error("Google auth error:", error);
      toast.error("Google authentication failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      if (isSignUp) {
        const { error } = await signUp(data.email, data.password, {
          full_name: data.name,
          user_type: 'photographer'
        });

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Account created! Please check your email to verify.");
          setIsSignUp(false);
        }
      } else {
        const { error } = await signIn(data.email, data.password);

        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Welcome back!");
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#183EC2] to-[#EAEEFE] relative overflow-hidden">
      {/* Animated 3D Shapes */}
      <motion.img
        src={cubeImage}
        alt="Cube"
        className="absolute top-10 left-20 w-48 opacity-80"
        animate={{
          translateY: [-30, 30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src={waveImage}
        alt="Wave"
        className="absolute bottom-10 right-10 w-60 opacity-80"
        animate={{
          translateX: [-20, 20],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Auth Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isSignUp ? "Join our community of photographers" : "Sign in to your account"}
          </p>
        </div>

        {/* Google Auth Button */}
        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                placeholder='Name'
                type="text"
                name='name'
                value={data.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              placeholder='Email'
              type="email"
              name='email'
              value={data.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={data.password}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12'
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800'
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  placeholder='Confirm Password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12'
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800'
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:underline text-sm"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"
            }
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
