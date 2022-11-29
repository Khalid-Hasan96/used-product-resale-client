import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaDiscord, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
      return (
            <footer className="footer p-10 bg-neutral text-neutral-content">
                  <div>
                        <img src={logo} className="w-14" alt="" />
                        <p><span className='text-2xl'>PC Buy</span><br />Providing reliable service since 2020</p>
                  </div>
                  <div>
                        <span className="footer-title">FOLLOW US</span>
                        <Link className="link link-hover flex items-center"><FaFacebookSquare /><span className='ml-1'>Facebook</span></Link>
                        <Link className="link link-hover flex items-center"><FaTwitterSquare /><span className='ml-1'>Twitter</span></Link>
                        <Link className="link link-hover flex items-center"><FaLinkedin /><span className='ml-1'>Linkedin</span></Link>
                        <Link className="link link-hover flex items-center"><FaDiscord /><span className='ml-1'>Discord</span></Link>
                  </div>
                  <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Help Center</Link>

                  </div>
                  <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                  </div>
            </footer >
      );
};

export default Footer;