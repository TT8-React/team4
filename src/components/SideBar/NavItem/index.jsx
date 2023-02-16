import { Button, Typography } from '@mui/material'
import React from 'react'

export default function Index({ title, route, current, onClick }) {
    let active = current === route

    const container = {
        onClick: onClick,
        sx: { height: 50, cursor: "pointer", minWidth: "100px", maxWidth: "200px", ":hover": { background: '#D9D9D9' } },
    }

    const text = {
        sx: { cursor: "pointer", minWidth: "100px" },
        fontWeight: active ? 800 : 450,
        fontSize: 16,
        width: "100%",
        textAlign: "left",
        color: "#000"
    }

    return (
        <Button {...container}   >
            <Typography {...text}  >{title || "Route"}</Typography>
        </Button>
    )
}
