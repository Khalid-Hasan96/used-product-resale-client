import React from 'react';

const DisplayCategories = ({ category }) => {
      const { title, img, _id } = category;
      return (
            <button className='p-10 bg-neutral text-neutral-content rounded-2xl flex flex-col lg:flex-row items-center justify-around'>
                  <img src={img} className='w-24' alt="" />
                  <h3 className='text-4xl uppercase'>{title}</h3>
            </button>
      );
};

export default DisplayCategories;