import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Shop = () => {
    const productData = useLoaderData()
    console.log(productData)
    return (
        <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3 '>
            {
                productData.map(product =>(
                   <ProductCard
                   product={product}
                   key={product.id}
                   ></ProductCard>
                ))
            }
        </div>
    );
};

export default Shop;