import React from 'react';
import './Singlejob.css'
const Singlejob = ({ job,handleDetails}) => {
    // console.log(job);
    const { companyLogo, jobName, id, type, salary, location, companyName } = job;
    return (
        <div>
            <div className="card w-full bg-base-100 border-2 gap-2 border-r-pink-200 my-3">
                <figure><img className='img' src={companyLogo} alt="companyLogo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {jobName}
                    </h2>
                    <p className='text-2xl'>{companyName} LLC</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-primary badge-outline">{type}</div>
                        <div className="badge badge-primary badge-outline ">Full Time</div>
                    </div>
                    <p> ௹{location}  <span> $ {salary}</span></p>
                    <button onClick={()=>handleDetails(id)} className='btn w-fit  btnMore'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Singlejob;