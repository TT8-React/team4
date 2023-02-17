import React, { useRef, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Btn from '../button';
import uploadCloud from '../../assets/Images/upload-to-cloud.png'

export default function Index() {

    const inputFile = useRef()
    const [file, setFile] = useState(null);
    const fileType = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"

    const container = { textAlign: "left", width: "fit-content", gap: 2, flexDirection: "column", display: "flex", alignItems: "flex-start" }

    const uploadBtnStyle = {
        background: "#EFEFEF",
        color: "#000",
        borderRadius: "15px",
        border: "1px solid #848484",
        minWidth: "250px",
        maxWidth: "300px",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "15px",
        gap: 2
    }


    return (
        <Box {...container}>
            <Box>
                <Typography fontWeight={"bold"} children="Upload CSV document" />
            </Box>

            <input
                ref={inputFile}
                onChange={e => setFile(e.target.files[0])}
                style={{ display: "none" }}
                id="fileSelect"
                type="file"
                accept={fileType} />

            <Box display={"flex"} gap={5}>

                <Button
                    onClick={_ => inputFile.current.click()}
                    sx={uploadBtnStyle} >
                    <img alt="" style={{ height: "24px" }} src={uploadCloud} />
                    <Typography variant='body2' noWrap children={file?.name || "Upload here..."} />
                </Button>

                <Btn text={"Submit"} />
            </Box>
        </Box>
    )
}
