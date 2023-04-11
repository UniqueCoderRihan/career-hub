import React from 'react';
import './Applied.css'
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { companyLogo, companyName, jobName, location, salary, type,id} = job;
    return (
        <div>
            <div className='jobContainer flex border-2 p-5'>
                <img className='companylogo' src={companyLogo} alt="" />
                <div className='detailsjob'>
                    <div className=''>
                        <p className='text-2xl font-semibold my-3'>{jobName}</p>
                        <p className='my-3'>{companyName}</p>
                        <p className='my-2'> <span className='badge badge-primary badge-outline'>{type}</span> <span className='badge badge-primary badge-outline'>Full Time</span> </p>
                        <div className='flex gap-2'>
                            <div className='flex '>
                                <img className='mr-3' src="https://i.ibb.co/X3RjcFY/Location-Icon.png" alt="Location-Icon" border="0" />
                                <p> <span className='font-semibold'>Location :</span> {location}</p>
                            </div>
                            <div className='flex'>
                                <img className='mr-3' src="https://i.ibb.co/sCGShgY/Frame.png" alt="Frame" border="0" />
                                <p><span className='font-semibold'>Salary:</span> {salary}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/${id}`}>
                            <button className='btn btn-primary'> View Details </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppliedJob;