import React from 'react'

import PieChart from '../../components/Charts/PieChart'
import LineChart from '../../components/Charts/LineChart'
import VerticalBarChart from '../../components/Charts/VerticalBarChart'
import { Box } from '@mui/material'

export default function index() {

    const container = {
        height: "100vh",
        width: "100%",
        display: "flex",
        gap: 5,
        flexDirection: "column",
        padding: "10px",
        boxSizing: "border-box"
    }

    return (
        <Box {...container} >
            <Box display={"flex"} justifyContent="space-evenly">
                <LineChart />
                <PieChart />
            </Box>
            <Box display={"flex"} width={"100%"} justifyContent="space-around">
                <VerticalBarChart />
            </Box>
        </Box>
    )
}
