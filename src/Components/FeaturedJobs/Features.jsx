import React, { useState } from 'react';

const Features = () => {
    const [jobs,setjobs] =useState([]);
    fetch('feautures.json')
    .then(res=>res.json())
    .then(jobs=>setjobs(jobs))
    
    return (
        <div>
            <div className='text-center my-4'>
                <h3 className='text-4xl font-semibold'>Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {
                jobs.map(job=> <p>name:{job.name}</p>)
            }
        </div>
    );
};

export default Features;