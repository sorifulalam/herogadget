import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import { addtoDb } from '../../Utilis/fakeDb';

const Shop = () => {
    const productData = useLoaderData()
    const handelAddtocart = id =>{
        console.log(id)
        addtoDb(id)
    }

    

    return (
        <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3 '>
            {
                productData.map(product =>(
                   <ProductCard
                   product={product}
                   key={product.id}
                   handelAddtocart = {handelAddtocart}
                   ></ProductCard>
                ))
            }
        </div>
    );
};

export default Shop;