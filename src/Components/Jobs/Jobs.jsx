import React from 'react';
import Jobcategory from '../Jobcategory/Jobcategory';

const Jobs = ({ jobs }) => {
    // console.log(jobs);
    return (
        <div>
            <div className='text-center my-3'>
                <h3 className=' text-4xl font-semibold'>Job Category List</h3>
                <p className='mt-2 '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-2 my-3'>
                {
                    jobs.map(job => <Jobcategory
                        key={job.id}
                        job={job}
                    ></Jobcategory>)
                }
            </div>
        </div>
    );
};

export default Jobs;