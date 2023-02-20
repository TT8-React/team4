import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Input } from '@mui/material';
import Button from '../../components/button';


export default function Index() {
    const [onEdit, setOnEdit] = useState(false)

    const [data, setData] = useState(
        [
            { id: "0", label: "Name", value: "Lorem ipsum" },
            { id: "1", label: "test", value: "Lorem ipsum" },
            { id: "2", label: "test", value: "Lorem ipsum" },
            { id: "3", label: "test", value: "Lorem ipsum" },
            { id: "4", label: "test", value: "Lorem ipsum" },
            { id: "5", label: "test", value: "Lorem ipsum" },
            { id: "6", label: "test", value: "Lorem ipsum" },
        ]
    )

    const BoxContainer = {
        background: "#F2F2F2",
        border: "1px solid #989898",
        borderRadius: 2,
        padding: "15px 25px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        boxSizing: "border-box"
    }



    function onChange({ target: { value, id } }) {
        setData(prev => prev.map(inp => inp.id === id ? ({ ...inp, value }) : inp))
    }

    return (
        <div style={{ height: "100vh", width: "800px", margin: "auto" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 2,
                }}
            >
                <Button text={onEdit ? "Submit" : "Edit company details"} onClick={() => setOnEdit(prev => !prev)} />
                <Box
                    sx={BoxContainer}
                >
                    {data.map((row, index) =>
                        <Box sx={{ textAlign: "left" }} key={index}>
                            <Typography variant='body2' children={index ? (row.label + index) : (row.label)} />
                            {onEdit ?

                                <Input sx={{ fontWeight: "bold", padding: 0 }} id={row.id} value={row.value} onChange={onChange} /> :

                                <Typography fontWeight={"bold"} children={row.value} />}
                        </Box>
                    )
                    }
                </Box>

            </Box>
        </div>
    )
}