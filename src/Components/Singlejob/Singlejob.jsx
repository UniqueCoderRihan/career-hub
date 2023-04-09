import React from 'react';
import './Singlejob.css'
const Singlejob = ({ job }) => {
    // console.log(job);
    const { companyLogo, jobName, id, type, salary, location, companyName } = job;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='img' src={companyLogo} alt="companyLogo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {jobName}
                    </h2>
                    <p className='text-2xl'>{companyName} LLC</p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <button className='btn w-fit'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Singlejob;