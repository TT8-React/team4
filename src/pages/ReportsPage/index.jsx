import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import DialogNewReport from '../../components/DialogNewReport'
import DetailsBox from '../../components/DetailsBox'
import Button from '../../components/button'
import { ButtonBoxContainer, ReportBoxContainer, ReportsPageContainer } from './style'

export default function Index() {
    const [openDialog, setOpenDialog] = useState(false)
    const [reports, setReports] = useState(
        [
            {
                title: "SEBI report",
                date: { from: "2020/2/10", to: "2021/1/15" }
            },
            {
                title: "GRI report",
                date: { from: "2020/2/10", to: "2021/1/15" }
            },
            {
                title: "Customize report",
                date: { from: "2020/2/10", to: "2021/1/15" }
            },
        ]
    )

    function onDone(newReportData) {
        setReports(prev => [...prev, newReportData])
    }


    const DialogBox = <DialogNewReport
        open={openDialog}
        handleClose={_ => setOpenDialog(false)}
        onDone={onDone}
        Button={
            <Button
                text={"Create New Report"}
                onClick={_ => setOpenDialog(true)}
            />
        }
    />

    return (
        <Box sx={ReportBoxContainer}>
            <Box sx={ButtonBoxContainer}>
                {DialogBox}
            </Box>
            <Divider sx={{ color: "#000", marginY: "20px", height: "2px" }} />
            <Box sx={ReportsPageContainer}>
                {reports.map((report, index) => < DetailsBox {...report} key={report.title + index} />)}
            </Box>
        </Box>
    )
}
