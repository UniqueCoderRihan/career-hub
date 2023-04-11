import React from 'react';

const OnsiteContainer = ({data}) => {
    console.log(data);
    const {id,companyLogo,companyName,jobDescription,jobName} = data;
    return (
        <div>
            <div className='flex border-2 my-2 rounded-md'>
                <img className='object-cover h-48 w-96' src={companyLogo} alt="" />
                <div className='mx-auto my-auto'>
                    <p className='text-2xl font-semibold'> Job Title: {jobName}</p>
                    <p className='text-1xl font-medium'>Company Name: {companyName}</p>
                    <p>{jobDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default OnsiteContainer;