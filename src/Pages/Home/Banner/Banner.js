import React from 'react';
import banner from '../../../assets/banner.png';

const Banner = () => {
      return (
            <div className='flex flex-col justify-center items-center' style={

                  {
                        background: `url(${banner})`,
                        backgroundSize: '100%',
                        height: '85vh'

                  }
            }>
                  <h1 className="text-4xl text-gray-100 font-bold">Welcome to <span className='font-bolder underline underline-offset-8'>PC Buy</span></h1>
                  <h2 className="text-3xl text-gray-100 font-bold mt-3">Where Computer Enthusiasts Buy and Sell PC</h2>
                  <h4 className="text-2xl text-gray-100 font-bold mt-3">Try us out for FREE - We offer lower fees</h4>
                  <button className='btn mt-3'>Get Started</button>
            </div >

      );
};

export default Banner;