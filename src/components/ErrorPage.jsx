import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
   
    <div className="flex flex-col items-center justify-center h-screen">
            <img className='w-[400px] md:w-auto rounded-full' src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />
            <h1 className="md:text-5xl text-2xl font-bold mb-2">Oops! Page not found.</h1>
            <p className="text-gray-500 text-center mb-8">
                We're sorry, but the page you requested could not be found.
            </p>
            <Link to="/" className="bg-orange-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
                Go back to homepage
            </Link>
        </div>
  )
}

export default ErrorPage
