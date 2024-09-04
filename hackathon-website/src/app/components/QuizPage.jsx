import React from 'react'
import Link from 'next/link';

const QuizPage = () => {
  return (
    <div>
      <Link
        href="/"
        className="fixed top-4 right-4 bg-blue-500 text-black px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </Link>
      <h1>quiz</h1>
    </div>
  )
}

export default QuizPage
