import React from 'react';
import Footer from '../Footer/Footer'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
const Chat = () => {
    const marks = [
        { name: 'Assignment 1', marks: 60 },
        { name: 'Assignment 2', marks: 60 },
        { name: 'Assignment 3', marks: 58 },
        { name: 'Assignment 4', marks: 52 },
        { name: 'Assignment 5', marks: 60 },
        { name: 'Assignment 6', marks: 59 },
        { name: 'Assignment 7', marks: 59 },
    ];
    return (
        <div>
            <div>
                <h3 className='text-center my-4 font-semibold'>My Assignment Marks </h3>
                <AreaChart
                    width={1000}
                    height={300}
                    data={marks}
                >
                    <Area dataKey="marks"></Area>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Chat;