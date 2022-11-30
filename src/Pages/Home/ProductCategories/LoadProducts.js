import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayProducts from './DisplayProducts';

const LoadProducts = () => {
      const products = useLoaderData();

      return (
            <div className='max-w-screen-xl mx-auto my-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Products</h2>
                  <div className='my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {
                              products.map(product => <DisplayProducts
                                    key={product._id}
                                    allProducts={product}
                              ></DisplayProducts>)
                        }
                  </div>
            </div>
      );
};

export default LoadProducts;