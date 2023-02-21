import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavItem from '../NavItem'

import React, { useState } from 'react'

export default function Index({ title, current, dropList, changeRoute }) {
    let active = dropList?.some(link => link.route === current)

    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(prev => !prev);
    };

    const container = {
        sx: { p: 0, boxShadow: "none", background: "#0000", borderWidth: "none", width: "200px", ":hover": { background: '#d0d0d0' } },
    }

    const text = {
        fontWeight: active ? 800 : 450,
        fontSize: 18,
        marginLeft: -1,
    }

    return (
        <Accordion  {...container} expanded={expanded} onChange={handleChange}>
            <AccordionSummary sx={{ height: "36px" }} expandIcon={<ExpandMoreIcon />}>
                <Typography {...text} children={title || "Route"} />
            </AccordionSummary >
            <AccordionDetails>
                {dropList?.map(link => <NavItem key={link.title} onClick={_ => changeRoute(link.route, link.title)} current={current} {...link} />)}
            </AccordionDetails>
        </Accordion >
    )
}
