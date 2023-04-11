import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedDetail = () => {
    const alljobs = useLoaderData();
    const {id} = useParams();
    console.log(id);
    // const seletedJob = alljobs.filter(job => job.id === id);
    return (
        <div>
            <h3>Tell me Detail</h3>
        </div>
    );
};

export default AppliedDetail;