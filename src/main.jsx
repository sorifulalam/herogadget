import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Cards/Shop';
import Cart from './components/Cards/Cart';
import { ProductAndCarddata } from './loaders/getCard&Productdata';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
          loader:()=>fetch('products.json'),
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
          loader:ProductAndCarddata,
        },
       
        
      ],
    },
    
   

  ]);




ReactDOM.createRoot(document.getElementById('root')).render(    <RouterProvider router={router} />
)
