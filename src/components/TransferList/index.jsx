import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { StyledButton, StyledCard, StyledList, StyledListItem } from './style';
import { ListItemText } from '@mui/material';


function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const TransferList = () => {

    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState([0, 1, 2, 3]);
    const [right, setRight] = useState([4, 5, 6, 7]);
  
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
  
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
    const handleCheckedRight = () => {
      setRight(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setChecked(not(checked, leftChecked));
    };
  
    const handleCheckedLeft = () => {
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      setChecked(not(checked, rightChecked));
    };
  
    const customList = (items) => (
      <StyledCard>
        <StyledList
          sx={{
            width: 200,
            height: 230,
            bgcolor: 'background.paper',
            overflow: 'auto',
          }}
          dense
          component="div"
          role="list"
        >
          {items.map((value) => {
            const labelId = `transfer-list-all-item-${value}-label`;
  
            return (
              <StyledListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
                active={checked.indexOf(value) !== -1}
              >
                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
              </StyledListItem>
            );
          })}
        </StyledList>
      </StyledCard>
    );
  
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <StyledButton
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;&gt;
            </StyledButton>
            <StyledButton
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;&lt;
            </StyledButton>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    );
}

export default TransferList