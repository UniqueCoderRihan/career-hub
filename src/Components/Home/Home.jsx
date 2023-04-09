import React from 'react';
import Nabvar from '../Nabvar/Nabvar';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const location = useLocation()
    return (
        <div className='mx-5'>
            <Nabvar></Nabvar>
            {
                location.pathname =='/'?<Header></Header>:``
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Home;