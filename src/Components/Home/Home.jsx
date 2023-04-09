import React from 'react';
import Nabvar from '../Nabvar/Nabvar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;