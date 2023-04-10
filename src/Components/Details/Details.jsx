import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const alljobs = useLoaderData([]);
    // console.log(alljobs);
    const seletedJob = alljobs.filter(job=>job.id===id);
    console.log(seletedJob);
    const {salary,type,location,jobDescription,experience,educationQualification,companyName,companyLogo,postName,jobName,jobResponsibilities,} = seletedJob[0];
    
    return (
        <div>
            <h2>You are View On {postName} Job Details</h2>
        </div>
    );
};

export default Details;