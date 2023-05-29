import React from 'react';
import { getStorecart } from '../../Utilis/fakeDb';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
   const {cartArray , products} = useLoaderData()
    console.log(products)
    
    return (
        <div className='flex min-h-screen items-start justify-start bg-gray-100 text-gray-900'>
           
        </div>
    );
};

export default Cart;