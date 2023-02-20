import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '../Input';
import { useState } from 'react';
import AccordionList from '../AccordionList';
import Button from '../button';

const TapOne = () => {
    const [value, setValue] = useState([
        { label: "item1", value: "" },
        { label: "item2", value: "" },
        { label: "item3", value: "" },
        { label: "item4", value: "" },
        { label: "item5", value: "" },
        { label: "item6", value: "" },
        { label: "item7", value: "" },
        { label: "item8", value: "" },
        { label: "item9", value: "" },
        { label: "item10", value: "" },

    ])

    const onChange = (e) => {
        let value = e.target.value
        setValue(prev => prev.map(item => (item.label === e.target.id) ? ({ ...item, value: value }) : item))
    }




    return (
        <Box>
            <Grid container columns={3} spacing='40px'>

                <Grid item xs={1}>
                    <AccordionList />
                </Grid>

                <Grid item container xs={1} columns={2} >
                    <Grid item xs={1}>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item1"} label="Report 1" value={value[0].value} onChange={onChange} placeholder="Enter Report1" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item2"} label="Report 2" value={value[1].value} onChange={onChange} placeholder="Enter Report1" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item3"} label="Report 3" value={value[2].value} onChange={onChange} placeholder="Enter Report2" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item4"} label="Report 4" value={value[3].value} onChange={onChange} placeholder="Enter Report3" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item5"} label="Report 5" value={value[4].value} onChange={onChange} placeholder="Enter Report4" />
                        </Box>
                    </Grid>

                    <Grid item xs={1}>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item6"} label="Report 6" value={value[5].value} onChange={onChange} placeholder="Enter Report5" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item7"} label="Report 7" value={value[6].value} onChange={onChange} placeholder="Enter Report6" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item8"} label="Report 8" value={value[7].value} onChange={onChange} placeholder="Enter Report7" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item9"} label="Report 9" value={value[8].value} onChange={onChange} placeholder="Enter Report8" />
                        </Box>
                        <Box sx={{mb : '15px'}}>
                            <Input id={"item10"} label="Report 10" value={value[9].value} onChange={onChange} placeholder="Enter Report9" />
                        </Box>
                    </Grid>

                    <Grid item xs={2} mt={5} display='flex' justifyContent='center' alignItems='center'>
                        <Button text='Submit' />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TapOne