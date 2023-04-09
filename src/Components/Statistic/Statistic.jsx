import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nabvar from '../Nabvar/Nabvar';
import Jobs from '../Jobs/Jobs';

const Statistic = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    return (
        <div>
            <Jobs
            jobs={jobs}
            ></Jobs>
        </div>
    );
};

export default Statistic;