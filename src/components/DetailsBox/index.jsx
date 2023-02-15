import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import openBox from '../../assets/Images/open-box.png'

export default function index({ title, imageSrc, onLoad }) {

    const Img = () => <img alt="" src={imageSrc || openBox} style={{ width: "70px" }} />

    const container = {
        display: 'flex', flexDirection: "column", alignItems: "center", bgcolor: "#D9D9D9"
        , width: "310px", borderRadius: "10px", padding: "23px 0", gap: "10px", minHeight: "115px"
    }

    const containerSkeleton = {
        display: 'flex', flexDirection: "column", alignItems: "center", gap: "10px"
    }

    return (
        <Box {...container}>

            {onLoad ?
                <Box {...containerSkeleton} >
                    <Skeleton variant="circular" width={80} height={80} />
                    <Skeleton variant="rectangular" width={260} height={20} />
                </Box>
                : <>
                    <Img src={imageSrc} />
                    <Typography variant="h6" fontWeight={"800"} children={title || "Customize report"} />
                </>
            }
        </Box>
    )
}
