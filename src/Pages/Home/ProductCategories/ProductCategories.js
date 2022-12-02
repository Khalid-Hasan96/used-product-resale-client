import React, { useEffect, useState } from 'react';
import DisplayCategories from './DisplayCategories';


const ProductCategories = () => {
      const [categories, setCategories] = useState([]);
      useEffect(() => {
            fetch('https://used-products-resale-server-khalid-hasan96.vercel.app/categories')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])


      return (
            <div className='my-14'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Product Categories</h2>

                  <div className='max-w-screen-xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              categories.map(category => <DisplayCategories
                                    key={category._id}
                                    category={category}
                              ></DisplayCategories>)
                        }
                  </div>
            </div>
      );
};

export default ProductCategories;