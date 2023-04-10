import React from 'react';
import './Singlejob.css'
import { Link } from 'react-router-dom';
const Singlejob = ({ job, handleDetails }) => {
    // console.log(job);
    const { companyLogo, jobName, id, type, salary, location, companyName } = job;
    // console.log();
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
                    <div className='flex gap-1'>
                        <div className='flex'>
                            <img className='mr-2' src="https://i.ibb.co/X3RjcFY/Location-Icon.png" alt="Location-Icon" border="0" />
                            <p>{location}</p>
                        </div>
                        <div className='flex'>
                            <img className='mr-2' src="https://i.ibb.co/sCGShgY/Frame.png" alt="Frame" border="0" />
                            <p>{salary}</p>
                        </div>
                    </div>
                    {/* <button onClick={()=>handleDetails(id)} className='btn w-fit  btnMore'>View Details</button> */}
                    <Link to={id}> <button className='btn-primary btn'>View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Singlejob;