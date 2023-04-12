import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../fakedb/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJobDetails/AppliedJob';
import Footer from '../Footer/Footer';

const Applied = () => {
    const alljobs = useLoaderData();
    const [jobs, setjobs] = useState([]);
    const [filter, setfilter] = useState([]);
    // console.log(alljobs);
    useEffect(() => {
        const Database = getShoppingCart();
        let applyedJob = [];
        for (const id in Database) {
            const applyed = alljobs.find(job => job.id === id);
            if (applyed) {
                applyedJob.push(applyed)
            }

        }
        setjobs(applyedJob)
        setfilter(applyedJob)
    }, [])
    const handleFilter = type=>{
        const filtered =jobs.filter(job=>job.type==type)
        setfilter(filtered)

    }
    return (
        <div>
            <h3 className='text-4xl text-center font-semibold my-4'> Applied Job Here </h3>
            <div className='text-right hover:text-white'>
                <p onClick={()=> handleFilter('Onsite')} className='btn badge badge-outline'>OnSite</p>
                <p onClick={()=> handleFilter('Remote')} className='btn badge badge-outline'>Remote</p>
                {/* <p className='btn badge badge-outline'>Remote</p> */}
            </div>
            <div>
                {
                    filter.map(job =>
                        <AppliedJob
                            key={job.id}
                            job={job}
                        >
                        </AppliedJob>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Applied;