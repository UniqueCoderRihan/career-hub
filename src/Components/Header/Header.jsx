import React from 'react';
import './Header.css'
import Nabvar from '../Nabvar/Nabvar';

const Header = () => {
    return (

        <div className='mx-5'>
            <div className='grid md:grid-cols-2 bg-base-200'>
                <div className='w-50% my-auto'>
                    <div>
                        <h4 className='text-5xl font-semibold'>One Step </h4>
                        <h4 className='text-5xl font-semibold'>Closer To Your</h4>
                        <h4 className='text-5xl font-semibold'><span className='primaryColour'>Dream Job</span></h4>
                        <p className='text-2xl my-4'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='btn btn-liner'>Get Started</button>
                    </div>
                </div>
                <div className='w-50% mt-0'>
                    <img className='mx-auto' src="https://i.ibb.co/Vts4CBc/dsdsd.png" alt="dsdsd" border="0" />
                </div>
            </div>
        </div>
    );
};

export default Header;