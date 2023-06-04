import React from 'react';
import background from '../../../assets/images/bg.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mb-12' >
            <footer  style={{ backgroundImage: `url(${background})` }} className="footer p-10 text-black">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>

            </footer>
            <p className='text-center'>@Copyright Allright Reserved by doctors portel in 2023 </p>
        </div>
    );
};

export default Footer;