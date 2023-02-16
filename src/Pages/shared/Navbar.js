import React from 'react';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png'
import { GoSignOut } from "react-icons/go";

const Navbar = () => {
    const menulist = <>
        <li><Link to='/media'>Media</Link></li>
        <li><Link>Message</Link></li>
        <li><Link to='/about'>About</Link></li>
    </>
    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        {menulist}
                    </ul>
                </div>
                <Link to='/' className="font-serif btn btn-ghost normal-case text-2xl">Social<span className='text-sky-500'>Con</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menulist}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src={profile} alt='profile' title='Profile' />
                    </div>
                </label>
                <div className='btn btn-ghost btn-circle avatar'>
                        <GoSignOut className='h-5 w-5 text-sky-500'></GoSignOut>
                </div>

            </div>
        </div>
    );
};

export default Navbar;