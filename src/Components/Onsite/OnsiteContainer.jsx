import React from 'react';
import OnsiteJob from './OnsiteJob';

const OnsiteContainer = ({jobs}) => {
    console.log(jobs.length);
    let data =[];
    const type = 'Onclick';
    for(let i=0; i>jobs.length;i++){
        let typeDepened = jobs.find(job=> job.type ===type)
        data.push(typeDepened);
        
    }
    console.log(data);
    return (
        <div>
            {
                data.map(onsiteJob=> <OnsiteJob
                data={onsiteJob}
                key={onsiteJob.id}
                ></OnsiteJob> )
            }
        </div>
    );
};

export default OnsiteContainer;