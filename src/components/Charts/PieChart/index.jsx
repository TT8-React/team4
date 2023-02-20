import React from 'react';
import { Pie } from 'react-chartjs-2';

const dataArray = [27, 24, 21, 6, 20,]
const data = {
    datasets: [
        {
            data: dataArray,
            backgroundColor: [
                '#0263FF',
                '#FF7723',
                '#8E30FF',
                '#BF5695',
                '#0D1EEF',
            ],
            borderWidth: 0,
        },
    ],
};


export default function Index() {
    return <div style={{ width: "200px", border: "1px solid #969696", borderRadius: "15px" }}>
        <Pie data={data} style={{ background: "#F9F9F9", borderRadius: "15px", }} />
    </div>;
}
