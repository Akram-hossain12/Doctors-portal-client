import React from 'react';
import Navbar from '../Pages/Sheard/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashbordLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashbord">My Appointments</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;