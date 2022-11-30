import React from 'react';
import { Link } from 'react-router-dom';


const DisplayCategories = ({ category }) => {
      const { title, img, _id } = category;

      return (
            <div>
                  <Link to={`/category/${_id}`}>
                        <div className='bg-neutral text-neutral-content rounded-2xl flex flex-col lg:flex-row items-center justify-around'>
                              <div className="card bg-base-100 shadow-xl image-full">
                                    <figure><img src={img} alt={title} /></figure>
                                    <div className="card-body flex items-center justify-center">
                                          <h2 className="card-title uppercase text-4xl text-center hover:text-lime-300 ease-in duration-300">{title}</h2>
                                    </div>
                              </div>

                        </div >

                  </Link>

            </div>
      );
};

export default DisplayCategories;

{/* <img src={img} className='w-24' alt="" />
                              <h3 className='text-4xl uppercase'>{title}</h3> */}