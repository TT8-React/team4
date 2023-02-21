import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index({ title, navLink, navRoute }) {

    const navigate = useNavigate();
    return (

        // title : Text of Link
        // navLink : Text of navlink button
        // navRoute : Navigation Route
        <>
            <Typography onClick={() => navigate(navRoute || "/")} sx={{ cursor: "pointer" }} variant="caption" fontWeight={"bold"}>
                {title || ("Don't have an account ?")}
                <Typography variant="caption" fontWeight={"bold"} color={"red"}
                >
                    {" " + (navLink || "Sign up")}
                </Typography>
            </Typography>
        </>
    )

}
