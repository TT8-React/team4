import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'
import openBox from '../../assets/Images/open-box.png'

export default function index({ title, imageSrc, onLoad }) {
    // const ContainerStyle = { backgroundColor: "#D9D9D9", width: "300px", padding: "23px 100px", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "15px" }
    const Img = ({ src }) => <img alt="" src={src || openBox} style={{ width: "100px" }} />

    return (
        <Box bgcolor={"#D9D9D9"} width={"300px"} borderRadius={"10px"} padding={"23px 0"} gap={"10px"}>

            {onLoad ?
                <Box >
                    {[...new Array(4)].map(_ => <Skeleton style={{ margin: "auto" }} width={"200px"} animation="wave" />)}
                </Box>
                : <>
                    <Img src={imageSrc || openBox} />
                    <Typography variant="h6" fontWeight={"800"} children={title || "SEBI report"} />
                </>
            }
        </Box>
    )
}
