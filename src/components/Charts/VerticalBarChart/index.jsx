import React from "react";
import Chart, { CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8].map(value => value * 1000),
    datasets: [
        {
            data: [40, 88, 60, 80, 88, 35, 56, 59],
            backgroundColor: "#159406",
        },
    ]
};

export default function Index() {
    return (
        <div style={{ width: "750px", border: "1px solid #969696", borderRadius: "15px" }}>
            <Bar data={data} style={{ background: "#F9F9F9", borderRadius: "15px" }} />
        </div>
    );
}
