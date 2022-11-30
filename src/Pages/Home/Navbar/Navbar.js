import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';


const Navbar = () => {

      const menutItems = <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/login'>Login</Link></li>
      </>

      return (
            <div className="navbar bg-neutral text-neutral-content">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                                    {menutItems}
                              </ul>
                        </div>
                        <div className='flex items-center lg:ml-10'>
                              <img src={logo} className="w-14" alt="" />
                              <Link to='/' className="btn btn-ghost normal-case text-4xl">PC Buy</Link>
                        </div>
                  </div>
                  <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 lg:mr-10">
                              {menutItems}
                        </ul>
                  </div>

            </div>
      );
};

export default Navbar;