import React from 'react';

const OnsiteContainer = ({data}) => {
    console.log(data);
    const {id,companyLogo,companyName,jobDescription} = data;
    return (
        <div>
            <h2>Welcome To Onsite Job Container</h2>
            <div>
                <img className='object-cover h-48 w-96' src={companyLogo} alt="" />
                <div>
                    <p>{companyName}</p>
                </div>
            </div>
        </div>
    );
};

export default OnsiteContainer;