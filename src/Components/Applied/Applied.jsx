import React from 'react';
import { getShoppingCart } from '../../../fakedb/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJobDetails/AppliedJob';
import Footer from '../Footer/Footer';

const Applied = () => {
    const alljobs = useLoaderData();
    // console.log(alljobs);
    const Database = getShoppingCart();
    let applyedJob = [];
    for (const id in Database) {
        const applyed = alljobs.find(job => job.id === id);
        if (applyed) {
            applyedJob.push(applyed)
        }
        
    }
    return (
        <div>
            <h3 className='text-4xl text-center font-semibold my-4'> Applied Job Here </h3>
            <div className='text-right hover:text-white'>
                <Link to='/onsite'><p className='btn badge badge-outline'>OnSite</p></Link>
                <p className='btn badge badge-outline'>Remote</p>
            </div>
            <div>
                {
                    applyedJob.map(job =>
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