import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Nabvar from '../Nabvar/Nabvar';
import Jobs from '../Jobs/Jobs';

const Statistic = () => {
    return (
        <div>
            <Jobs></Jobs>
        </div>
    );
};

export default Statistic;