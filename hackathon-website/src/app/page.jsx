import React from 'react'
import "../styles/globals.css"; // Ensure global styles are applied

import HomePage from './components/HomePage'
const page = () => {
  return (
    <div className='w-full'>
      <HomePage/>
    </div>
  )
}

export default page
