import React, { useEffect, useState } from 'react';
import Singlejob from '../Singlejob/Singlejob';

const Features = () => {
    const [jobs, setjobs] = useState([]);
    fetch('feautures.json')
        .then(res => res.json())
        .then(jobs => setjobs(jobs))

    const Data = jobs.slice(0, 4)


    return (
        <div>
            <div className='text-center my-4'>
                <h3 className='text-4xl font-semibold'>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4' >
                {
                    Data.map(job => <Singlejob
                        key={job.id}
                        job={job}
                    ></Singlejob>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Features;