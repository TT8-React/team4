import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';




const StyledAccordion = styled(Accordion)({
    border:"none",
    boxShadow:"none",
  });
    
const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
    color: "#000000",
    });

const StyledAccordionSummary = styled(AccordionSummary)({
    flexShrink: 0 ,
    background: "#EDEDED",
    border: "1px solid #000000" ,
    borderRadius: 6 ,
    width:401,
    height:51,
    
    });    

const StyledTypography = styled(Typography)({
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
    });

const StyledListItem = styled(ListItem)({
    background: "#EDEDED",
    borderRadius: 6,
    margin:16,
    width:368,
    height:51,
    });

const StyledListItemText = styled(ListItemText)({
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
    });    
    
export default function AccordionList() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <StyledAccordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <StyledTypography >Section A</StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
        <List>
            <StyledListItem>
              <StyledListItemText primary="Company Details" />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="Products/Services" />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="Operations" />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="Employees" />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="Holding, Subsidiary and Associate ..." />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="CSR File" />
            </StyledListItem>
            <StyledListItem>
              <StyledListItemText primary="Transparency and Disclosures ..." />
            </StyledListItem>
          </List>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <StyledTypography >Section B</StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <StyledAccordionSummary
          expandIcon={<StyledExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <StyledTypography >Section C</StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </StyledAccordion>
      
    </div>
  );
}