import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
height: '40px',
padding: '0px 16px',
background: '#000000',
borderRadius: '5px',
fontFamily: 'Inter',
fontWeight: '500',
fontSize: '16px',
color: '#FFFFFF',
'&:hover': {
    background: '#000000',

},

});


function MyButton({onClick,text}) {
  return (
    <>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </>
  );
}
export default MyButton;




