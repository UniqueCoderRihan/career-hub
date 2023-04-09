import React from 'react';

const Jobcategory = ({job}) => {
    // console.log(job);
    return (
        <div className='border-2  rounded-lg p-5'>
            <img className='p-2' src={job.img} alt="" />
            <h2 className='font-semibold text-2xl my-auto'>{job.name}</h2>
            <p>{job.quantity} + Avilable jobs</p>
        </div>
    );
};

export default Jobcategory;