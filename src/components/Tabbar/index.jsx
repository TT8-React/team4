import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TapOne from './TapOne';
import { styled } from '@mui/material/styles';
import TapTwo from './TapTwo';


const StyledTabs = styled(Tabs)({
    overflow: 'hidden',
    borderRadius : '5px',
    color : '#000',

    '& .Mui-selected': {
      backgroundColor: '#8F8F8F',
      color : '#000!important',
    },

    '& .MuiTabs-indicator' : {
        display : 'none'
    },
  });


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }
    
export default function BasicTabs() {
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{width : 'fit-content', margin : '20px auto'}}>
            <StyledTabs sx={{border : '1px solid #ccc'}} value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab sx={{width : '450px', fontWeight : 700}} label="Manual data  tab" {...a11yProps(0)} />
              <Tab sx={{width : '450px', fontWeight : 700}} label="Bulk upload tab" {...a11yProps(1)} />
            </StyledTabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TapOne />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TapTwo />
          </TabPanel>
        </Box>
      );

    }