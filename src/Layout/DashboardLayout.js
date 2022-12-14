import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const DashboardLayout = () => {
      const { user } = useContext(AuthContext);
      const [isAdmin] = useAdmin(user?.email);
      const [isSeller] = useSeller(user?.email);
      console.log(user)
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="drawer drawer-mobile">
                        <input id="pcbuy-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                              <Outlet></Outlet>

                        </div>
                        <div className="drawer-side">
                              <label htmlFor="pcbuy-drawer" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 bg-neutral text-neutral-content border rounded-xl">
                                    <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/myorders'>My Orders</Link></li>
                                    {
                                          isSeller && <>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                          </>
                                    }

                                    {
                                          isAdmin && <>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/allusers'>All User</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/allseller'>All Seller</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>Reported Items</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                                <li className='border hover:bg-lime-400 text-zinc-50 mt-3'><Link>My Buyers</Link></li>
                                          </>
                                    }

                              </ul>

                        </div>
                  </div>

                  <Footer></Footer>
            </div>
      );
};

export default DashboardLayout;