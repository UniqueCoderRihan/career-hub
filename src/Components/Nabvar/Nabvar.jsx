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
                    <Link>Statistics</Link>
                    <Link>Applied Job</Link>
                    <Link>Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-Linear">Start Applying</a>
            </div>
        </div>
    );
};

export default Nabvar;