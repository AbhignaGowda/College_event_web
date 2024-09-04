"use client";

import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Ensure the path is correct
import { useRouter } from 'next/navigation';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new URLSearchParams(formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });
  
      // Log the response to inspect it
      console.log('Response:', response);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData); // Log error details
        alert(errorData.message || 'Invalid credentials.');
        return;
      }
  
      const data = await response.json();
      console.log('Data:', data); // Log success response
  
      // Proceed with login actions if successful
      login(); // Set authentication status
      if (data.message === 'First login') {
        router.push('/profile-setup'); // Adjust the route as needed
      } else {
        router.push('/home'); // Adjust the route as needed
      }
    } catch (error) {
      console.error('Network error:', error); // Log network error
      alert('Network error.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
