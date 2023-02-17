import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

export default function Index(props) {


    const StyledBox = {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "40px 50px",
        border: "1px solid #000",
        background: "#F8F8F8",
        width: "fit-content",
        borderRadius: "15px",
        margin: "auto",
    };


    return (
        <Box sx={{ ...StyledBox, ...props.sx }}>
            <Typography fontWeight={600} variant='h5' children={props.Header || "LOG IN"} />
            {props?.children}
        </Box>
    )
}
