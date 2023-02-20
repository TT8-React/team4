import React from 'react'

import PieChart from '../../components/Charts/PieChart'
import LineChart from '../../components/Charts/LineChart'
import VerticalBarChart from '../../components/Charts/VerticalBarChart'
import { Box } from '@mui/material'

export default function index() {

    const container = {
        width: "fit-content",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
    }

    return (
        <Box {...container} >
            <Box display={"flex"} justifyContent="space-between">
                <LineChart />
                <PieChart />
            </Box>
            <Box display={"flex"}  >
                <VerticalBarChart />
            </Box>
        </Box>
    )
}
