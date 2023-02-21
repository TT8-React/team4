import { Box } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import AccNavItem from './AccordionNavItem'

export default function Index({ Links, currentRoute, onClick }) {

    const container = { bgcolor: "#EFEFEF", height: "100%", padding: "25px 50px", display: 'flex', flexDirection: 'column', gap: 5, alignItems: "left" }

    return (
        <Box {...container}>
            <Logo />
            <Box gap={2} display={"flex"} flexDirection={"column"}>
                {Links.map((link) =>
                    link.dropList ?
                        <AccNavItem {...link} changeRoute={onClick} current={currentRoute} key={link.title} /> :
                        <NavItem {...link} onClick={_ => onClick(link.route, link.title)} current={currentRoute} key={link.title} />
                )}
            </Box>
        </Box>
    )
}
