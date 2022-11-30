import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const DashboardLayout = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                              <Outlet></Outlet>
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 bg-neutral text-neutral-content border rounded-xl">
                                    <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>My Orders</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 '><Link>All Seller</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 '><Link>All Buyer</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 '><Link>Reported Items</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>Add a Product</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>My Products</Link></li>
                                    <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>My Buyers</Link></li>
                              </ul>

                        </div>
                  </div>

                  <Footer></Footer>
            </div>
      );
};

export default DashboardLayout;