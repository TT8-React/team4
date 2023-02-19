import { Box } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import AccNavItem from './AccordionNavItem'

export default function Index({ Links, currentRoute }) {
    const [current, setCurrent] = useState(currentRoute || "1")
    const changeRoute = (route) => {
        setCurrent(route)
    }
    const container = { bgcolor: "#EFEFEF", height: "100%", padding: "25px 50px", display: 'flex', flexDirection: 'column', gap: 5, alignItems: "left" }


    return (
        <Box {...container}>
            <Logo />
            <Box gap={2} display={"flex"} flexDirection={"column"}>
                {Links.map((link) =>
                    link.dropList ?
                        <AccNavItem {...link} changeRoute={changeRoute} current={current} key={link.title} />
                        : <NavItem {...link} onClick={_ => changeRoute(link.route)} current={current} key={link.title} />
                )}
            </Box>
        </Box>
    )
}
