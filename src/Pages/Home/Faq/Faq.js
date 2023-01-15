import React from 'react';
import faq from '../../../assets/5066368.jpg'

const Faq = () => {
      return (
            <div className='max-w-screen-xl mx-auto'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>FAQ</h2>
                  <div className='my-5 flex flex-col lg:flex-row items-center'>
                        <div className='w-full lg:w-1/2 p-10'>
                              <img src={faq} alt="" />
                        </div>
                        <div className='w-full lg:w-1/2 p-5'>
                              <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                          Who we are?
                                    </div>
                                    <div className="collapse-content">
                                          <hr />
                                          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste obcaecati, culpa eaque cupiditate amet repudiandae voluptas illum totam enim, ab quae incidunt, alias maiores corporis iusto perspiciatis odit sed?</p>
                                    </div>
                              </div>
                              <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                          Why should you trust us?
                                    </div>
                                    <div className="collapse-content">
                                          <hr />
                                          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officia, similique quia adipisci ea vel dignissimos officiis consequuntur reiciendis minus!</p>
                                    </div>
                              </div>
                              <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">
                                          what services we provide?
                                    </div>
                                    <div className="collapse-content">
                                          <hr />
                                          <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error, aut aspernatur quos quasi sequi quam perspiciatis assumenda at excepturi asperiores ratione, et quae doloribus hic eos ipsam iste voluptas!</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Faq;