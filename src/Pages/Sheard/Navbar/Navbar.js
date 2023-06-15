import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const hendalLogOut = () => {
        logOutUser()
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }
    const manuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {

            user?.uid ?
                <>
                    <li><Link to='/dashbord'>Dashbord</Link></li>
                    <li><button onClick={hendalLogOut} >LogOut</button></li>
                </>

                :
                <li><Link to='/login'>Login</Link></li>

        }


    </>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {manuItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;