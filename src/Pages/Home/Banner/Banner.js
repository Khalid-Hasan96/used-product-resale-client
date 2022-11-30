import React from 'react';
import banner from '../../../assets/banner.png';

const Banner = () => {
      return (
            <div className='flex flex-col justify-center items-center text-center' style={

                  {
                        background: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '85vh'

                  }
            }>
                  <h1 className="text-5xl text-gray-100 font-bold">Welcome to <span className='font-bolder'>PC Buy</span></h1>
                  <h2 className="text-2xl text-gray-100 font-bold mt-3">Where Computer Enthusiasts Buy and Sell PC Parts</h2>

                  <button className='btn mt-3'>Get Started</button>
            </div >

      );
};

export default Banner;