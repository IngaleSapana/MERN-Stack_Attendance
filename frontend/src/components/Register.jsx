import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import axios from 'axios'; // Install axios if not already installed

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(''); // State to hold success or error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginRedirect = () => {
    navigate('/choose-user');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData); // Replace with your API URL
      setMessage(response.data.message); // Show success message
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  const handleLoginClick = () => {
    navigate('/chooseuser'); // Navigate to the ChooseUser page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {message && (
            <div
              className={`mb-4 text-sm ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}
            >
              {message}
            </div>
          )}

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={handleLoginRedirect} className="text-indigo-600 hover:text-indigo-700">
              Login here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
