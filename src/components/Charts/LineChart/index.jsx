import React from "react";
import Chart, { CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

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
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Line",
            data: [33, 55, 48, 50, 44, 10],
            backgroundColor: "#00A7FF",
            borderColor: "#000"
        },
    ]
};

export default function Index() {
    return (
        <div style={{ width: "400px", border: "1px solid #969696", borderRadius: "15px" }}>
            <Line data={data} style={{ background: "#F9F9F9", borderRadius: "15px" }} />
        </div>
    );
}
