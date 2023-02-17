import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Input from '../Input';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TabBar() {
    const [value, setValue] = useState([
        {label:"item1",value:""},
        {label:"item2",value:""},
        {label:"item3",value:""},
        {label:"item4",value:""},
        {label:"item5",value:""},
        {label:"item6",value:""},
        {label:"item7",value:""},
        {label:"item8",value:""},
        {label:"item9",value:""},
        {label:"item10",value:""},

    ])

    const onChange =(e) =>{
     let value =e.target.value
     setValue(prev => prev.map(item=>(item.label === e.target.id) ? ({ ...item,value:value}) :item))
    }

   
  

  return (
    <Box sx={{ width: '35%' ,margin:5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
        <Grid  item xs={6} >
        <Input id={"item1"} label="Report 1" value={value[0].value} onChange={onChange} placeholder="Enter Report1"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item2"} label="Report 2" value={value[1].value} onChange={onChange} placeholder="Enter Report1"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item3"} label="Report 3" value={value[2].value} onChange={onChange} placeholder="Enter Report2"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item4"} label="Report 4" value={value[3].value} onChange={onChange} placeholder="Enter Report3"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item5"} label="Report 5" value={value[4].value} onChange={onChange} placeholder="Enter Report4"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item6"} label="Report 6" value={value[5].value} onChange={onChange} placeholder="Enter Report5"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item7"} label="Report 7" value={value[6].value} onChange={onChange} placeholder="Enter Report6"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item8"} label="Report 8" value={value[7].value} onChange={onChange} placeholder="Enter Report7"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item9"} label="Report 9" value={value[8].value} onChange={onChange} placeholder="Enter Report8"/>
        </Grid>
        <Grid item xs={6}>
        <Input id={"item10"} label="Report 10" value={value[9].value} onChange={onChange} placeholder="Enter Report9"/>
        </Grid>
      </Grid>
    </Box>
  );
}