import React from 'react';
import './Header.css'
import Nabvar from '../Nabvar/Nabvar';

const Header = () => {
    return (

        <div>
            <div>
                <Nabvar></Nabvar>
                <div>
                    <h4>One Step </h4>
                    <h4>Closer To Your</h4>
                    <h4><span>Dream Job</span></h4>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-liner'>Get Started</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Header;