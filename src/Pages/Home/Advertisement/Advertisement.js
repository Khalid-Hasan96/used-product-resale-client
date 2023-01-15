import React from 'react';
import ad1 from '../../../assets/advertisement/ASUS-laptops.webp';
import ad2 from '../../../assets/advertisement/gpu.webp';
import ad3 from '../../../assets/advertisement/KV.jpg';

const Advertisement = () => {
      return (
            <div className='max-w-screen-xl mx-auto my-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Advertisement</h2>
                  <div className='my-5'>
                        <div className='flex flex-col lg:flex-row gap-4'>
                              <img src={ad1} className="w-full lg:w-2/3" alt="" />
                              <img src={ad3} className="w-full lg:w-4/12" alt="" />
                        </div>
                        <img src={ad2} className="mt-4 w-full" alt="" />

                  </div>
            </div>
      );
};

export default Advertisement;