import React from 'react';
import acer from '../../../assets/sponsors/acer.png';
import apple from '../../../assets/sponsors/apple.png';
import asus from '../../../assets/sponsors/asus.png';
import corsair from '../../../assets/sponsors/corsair.png';
import gigabyte from '../../../assets/sponsors/gigabyte.png';
import lianli from '../../../assets/sponsors/lian_li.png';
import logitech from '../../../assets/sponsors/logitech.png';
import msi from '../../../assets/sponsors/msi.png';
import razer from '../../../assets/sponsors/razer.png';
import samsung from '../../../assets/sponsors/samsung.png';

const Sponsors = () => {
      return (
            <div className='my-14'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>Our Sponsors</h2>
                  <marquee behavior="string" direction="string">
                        <div className='flex mx-5 my-5'>
                              <img className='w-30 h-20' src={acer} alt="" />
                              <img className='w-30 h-20' src={apple} alt="" />
                              <img className='w-30 h-20' src={asus} alt="" />
                              <img className='w-30 h-20' src={corsair} alt="" />
                              <img className='w-30 h-20' src={gigabyte} alt="" />
                              <img className='w-30 h-20' src={lianli} alt="" />
                              <img className='w-30 h-20' src={logitech} alt="" />
                              <img className='w-30 h-20' src={msi} alt="" />
                              <img className='w-30 h-20' src={razer} alt="" />
                              <img className='w-30 h-20' src={samsung} alt="" />
                        </div>
                  </marquee>
            </div>
      );
};

export default Sponsors;