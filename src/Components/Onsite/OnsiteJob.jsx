import React from 'react';

const OnsiteJob = ({data}) => {
    // console.log(data);
    // const {id,companyLogo,companyName,jobDescription,jobName} = data;
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default OnsiteJob;


/*

<div className='flex border-2 my-2 rounded'>
                <img className='object-cover h-48 w-96' src={companyLogo} alt="" />
                <div className='mx-auto my-auto'>
                    <p className='text-2xl font-semibold'> Job Title: {jobName}</p>
                    <p>{data.type}</p>
                    <p className='text-1xl font-medium'>Company Name: {companyName}</p>
                    <p>{jobDescription}</p>
                </div>
            </div>

*/ 