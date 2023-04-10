import { stringify } from 'postcss';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const alljobs = useLoaderData([]);
    // console.log(alljobs);
    const seletedJob = alljobs.filter(job => job.id === id);
    // console.log(seletedJob);
    const { salary, type, location, jobDescription, experience, contact, educationQualification, companyName, companyLogo, postName, jobName, jobResponsibilities, } = seletedJob[0];

    const handleApply = (id)=>{
        const applyJob = alljobs.filter(job=>job.id ===id)
        
    }
    return (
        <div>
            <p className='text-4xl font-semibold text-center'>Job Details</p>
            <div className='flex'>
                <div className='my-4 mx-2'>
                    <p><span className='font-semibold'>Job Description: </span> <span>{jobDescription}.</span></p>
                    <p className='my-3'><span className='font-semibold'>Job Responsibility: </span> <span>{jobResponsibilities}.</span></p>
                    <p><span className='font-semibold'>Education Requerments: </span> <span>{educationQualification}.</span></p>
                    <p className='my-5'> <span className='font-semibold'>Experiance:</span> <span>{experience} on this filed.</span></p>
                </div>
                <div className='m-5'>
                    <p className='font-semibold mb-3'>Job Details:</p>
                    <hr />
                    <div className='flex'>
                        <img className='mr-3' src="https://i.ibb.co/sCGShgY/Frame.png" alt="Frame" border="0" />
                        <p><span className='font-semibold'>Salary:</span> {salary}</p>
                    </div>
                    <div className='flex'>
                        <img className='mr-3' src="https://i.ibb.co/R24sQWZ/Frame-1.png" alt="Frame-1" border="0"/>
                        <p><span className='font-semibold'>Job Title:</span> {jobName}</p>
                    </div>
                    <div>
                        <p className='font-semibold my-4'>Contact Information</p>
                        <hr />
                        <div className='flex'>
                            <img className='mr-3' src="https://i.ibb.co/Z1xBGbT/Frame-2.png" alt="Frame-2" border="0" />
                            <p><span className='font-semibold'> Phone :</span> {contact[0]}</p>
                        </div>
                        <div className='flex'>
                            <img className='mr-3' src="https://i.ibb.co/SdR5W8h/Frame-3.png" alt="Frame-3" border="0" />
                            <p> <span className='font-semibold'>Email :</span> {contact[1]}</p>
                        </div>
                        <div className='flex'>
                            <img className='mr-3' src="https://i.ibb.co/X3RjcFY/Location-Icon.png" alt="Location-Icon" border="0" />
                            <p> <span className='font-semibold'>Location :</span> {location}</p>
                        </div>

                        <button onClick={()=>handleApply(id)} className='btn btn-primary mt-3' >Apply Now</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;