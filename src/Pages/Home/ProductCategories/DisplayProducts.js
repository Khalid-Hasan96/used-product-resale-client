import React from 'react';

const DisplayProducts = ({ allProducts }) => {
      const { img, product, location, price, originalprice, yearsofuse, time, seller } = allProducts;
      return (
            <div className="card bg-neutral text-neutral-content shadow-xl">
                  <figure><img src={img} alt="" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{product}</h2>
                        <p>Location: {location}</p>
                        <p>Price: $<span className='text-3xl '>{price}</span></p>
                        <p>Original Price: $<span className='text-xl'>{originalprice}</span></p>
                        <p>Used for: {yearsofuse} years</p>
                        <p>Time: {time}</p>
                        <p>Seller Name: {seller}</p>
                        <div className="card-actions w-full">
                              <button className="btn btn-primary">Book Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default DisplayProducts;