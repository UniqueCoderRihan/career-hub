import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const alljobs = useLoaderData([]);
    // console.log(alljobs);
    const seletedJob = alljobs.filter(job=>job.id===id);
    // console.log(seletedJob);
    const {salary,type,location,jobDescription,experience,contact, educationQualification,companyName,companyLogo,postName,jobName,jobResponsibilities,} = seletedJob[0];
    
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
                    <p><span className='font-semibold'>Salary:</span> {salary}</p>
                    <p><span className='font-semibold'>Job Title:</span> {jobName}</p>
                    <div>
                        <p className='font-semibold my-4'>Contact Information</p>
                        <p> <span className='font-semibold'>Phone :</span> {contact[0]}</p>
                        <p> <span className='font-semibold'>Email :</span> {contact[1]}</p>
                        <p> <span className='font-semibold'>Location :</span> {location}</p>
                        <button className='btn btn-primary mt-3'>Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;