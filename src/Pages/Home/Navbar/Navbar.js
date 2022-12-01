import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider';


const Navbar = () => {
      const { user, logOut } = useContext(AuthContext);

      const handleLogOut = () => {
            logOut()
                  .then()
                  .catch()
      }

      const menutItems = <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>

            {
                  user?.uid ?
                        <>
                              <li><Link to='/dashboard'>Dashboard</Link></li>
                              <li><button onClick={handleLogOut}>Signout</button></li>
                        </>
                        : <li><Link to='/login'>Login</Link></li>
            }
      </>

      return (
            <div className='bg-neutral text-neutral-content '>
                  <div className="navbar lg:max-w-screen-2xl mx-auto">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                                          {menutItems}
                                          {
                                                user?.uid &&
                                                <div className='flex items-center lg:mr-6'>
                                                      <div className="avatar">
                                                            <div className="w-6 rounded-full md:w-8 lg:w-12">
                                                                  <img src={user?.photoURL} alt='' />
                                                            </div>
                                                      </div>
                                                      <p className='ml-2'>{user?.displayName}</p>
                                                </div>
                                          }
                                    </ul>
                              </div>
                              <div className='flex items-center lg:ml-10'>
                                    <img src={logo} className="w-8 md:10 lg:14" alt="" />
                                    <Link to='/' className="btn btn-ghost normal-case text-2xl md:text-3xl lg:text-4xl">PC Buy</Link>
                              </div>
                        </div>
                        <div className="navbar-end hidden lg:flex">
                              <ul className="menu menu-horizontal p-0 lg:mr-10">
                                    {menutItems}
                                    {
                                          user?.uid &&
                                          <div className='flex items-center lg:mr-6'>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full md:w-8 lg:w-12">
                                                            <img src={user?.photoURL} alt='' />
                                                      </div>
                                                </div>
                                                <p className='ml-2'>{user?.displayName}</p>
                                          </div>
                                    }

                              </ul>
                        </div>
                        <label htmlFor="pcbuy-drawer" className="btn btn-ghost navbar-end drawer-button lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                  </div>
            </div>
      );
};

export default Navbar;