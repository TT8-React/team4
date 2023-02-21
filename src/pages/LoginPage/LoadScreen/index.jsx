import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function Index({ load, loadChangeStatus }) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={load}
            onClick={loadChangeStatus}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
