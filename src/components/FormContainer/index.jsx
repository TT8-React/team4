import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

export default function Index(props) {


    const StyledBox = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        padding: "40px 50px",
        border: "1px solid #000",
        background: "#F8F8F8",
        width: "fit-content",
        maxWidth: "250px",
        borderRadius: "15px",
        margin: "auto",
    };


    const StyledForm = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
    };

    return (
        <Box sx={{ ...StyledBox, ...props.sx }}>
            <Typography fontWeight={600} variant='h5' children={props.Header || "LOG IN"} />
            <form style={StyledForm}>
                {props?.children}
            </form>
        </Box >
    )
}
