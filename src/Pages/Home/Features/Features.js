import React from 'react';
import buyer from '../../../assets/buyer.png';
import seller from '../../../assets/seller.png';
import fees from '../../../assets/fees.png';

const Features = () => {
      return (
            <div className='my-14'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Key Features</h2>
                  <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        <dir className="p-10 bg-neutral text-neutral-content rounded-2xl text-center">
                              <img src={buyer} className="w-24 mx-auto" alt="" />
                              <h4 className='text-2xl font-semibold'>Buyer Protection</h4>
                              <p className='mt-2'>PC Swaps Buyer Protection covers any item that is damaged or not as advertised in the listing.</p>
                        </dir>
                        <dir className="p-10 bg-neutral text-neutral-content rounded-2xl text-center">
                              <img src={seller} className="w-24 mx-auto" alt="" />
                              <h4 className='text-2xl font-semibold'>Seller Protection</h4>
                              <p className='mt-2'>If the buyer has not marked the item accepted within 3 days, then we automatically release the funds to you.</p>
                        </dir>
                        <dir className="p-10 bg-neutral text-neutral-content rounded-2xl text-center">
                              <img src={fees} className="w-24 mx-auto" alt="" />
                              <h4 className='text-2xl font-semibold'>Lowest Fees</h4>
                              <p className='mt-2'>Our fee is 8% TOTAL. No hidden fees or extra costs.</p>
                        </dir>
                  </div >
            </div>
      );
};

export default Features;