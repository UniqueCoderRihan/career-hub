import React from 'react';
import { Link } from 'react-router-dom';
import './Nabvar.css'

const Nabvar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <a className="text-2xl font-semibold">BDJOBS</a>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 pages mr-5">
                    <Link to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>Home</Link>
                    <Link to='/statistic' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>Statistics</Link>
                    <Link to='/applied' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>Applied Job</Link>
                    <Link to='/blogs' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-Linear">Start Applying</a>
            </div>
        </div>
    );
};

export default Nabvar;