import React from 'react';
import { getShoppingCart } from '../../../fakedb/fakedb';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Applied = () => {
    const alljobs = useLoaderData();
    // console.log(alljobs);
    const Database = getShoppingCart();
    let onsiteJob = [];
    let applyedJob = [];
    for (const id in Database) {
        const applyed = alljobs.find(job => job.id === id);
        const onsite = alljobs.filter(job=>job.type ==='onsite')
        if (applyed) {
            applyedJob.push(applyed)
        }
        if(onsite){
            onsiteJob.push(onsite)
        }
    }
    console.log(onsiteJob);
    return (
        <div>
            <h3 className='text-4xl text-center font-semibold my-4'> Applied Job Here </h3>
            <div className='text-right hover:text-white'>
                <p className='btn badge badge-outline'>OnSite</p>
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