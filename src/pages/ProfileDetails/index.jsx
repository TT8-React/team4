import { Box, Grid } from '@mui/material'
import Input from '../../components/Input'
import Button from '../../components/button'
import React from 'react'

export default function index({ inputArray, changeValue, onSubmit }) {

    const ItemStyle = { display: "flex", alignItems: "center", justifyContent: "center", margin: "10px 0px" }

    return (
        <Box sx={{ display: "flex", height: "100%", alignItems: "center", flexDirection: "column" }}>
            <Box>
                <Grid justifyContent={"center"} container rowSpacing={4} columnSpacing={10} >
                    {(inputArray || [...new Array(9)]).map((input, index) =>
                        <Grid key={index} item md={4} sx={ItemStyle} >
                            <Input label={"Text"} onChange={changeValue} placeholder={"Text"} {...input} />
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Button text={"Submit"} onClick={onSubmit} />
        </Box >
    )
}
