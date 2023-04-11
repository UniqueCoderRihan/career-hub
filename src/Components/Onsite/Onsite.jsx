import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../fakedb/fakedb';
import { useLoaderData } from 'react-router-dom';
import OnsiteContainer from './OnsiteContainer';

const Onsite = () => {
    const DataBase = useLoaderData();
    // const [onsite,setonsite] = useState([]);
    const localData = getShoppingCart();
    let appliedData = [];
    for(const id in localData){
        const appliedFind = DataBase.find(data=>data.id===id)
        appliedData.push(appliedFind);
        // console.log(appliedFind);
    }
    return (
        <div>
            <h2 className='text-center font-semibold text-3xl my-3'>Here Is All Onsite Available Job </h2>
            {
                appliedData.map(data => <OnsiteContainer
                key={data.id}
                data={data}
                ></OnsiteContainer>)
            }
        </div>
    );
};

export default Onsite;