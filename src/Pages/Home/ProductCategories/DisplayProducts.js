import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayProducts = ({ allProducts }) => {
      const { user } = useContext(AuthContext);
      const { img, product, location, price, originalprice, yearsofuse, time, seller } = allProducts;
      return (
            <div className="card bg-neutral text-neutral-content shadow-xl">
                  <figure><img src={img} alt="" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{product}</h2>
                        <p><small>Location:</small> {location}</p>
                        <p><small>Price:         </small> $<span className='text-3xl '>{price}</span></p>
                        <p><small>Original Price:</small> $<span className='text-xl'>{originalprice}</span></p>
                        <p><small>Used for:</small> {yearsofuse} years</p>
                        <p><small>Seller:</small> {seller}{user?.verifiedSeller && <FaCheck></FaCheck>}  </p>
                        <p><small>Time:</small> {time}</p>
                        <div className="card-actions w-full">
                              <button className="btn btn-primary">Book Now</button>
                        </div>
                  </div>
            </div >
      );
};

export default DisplayProducts;