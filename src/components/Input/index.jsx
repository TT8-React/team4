import {  InputBase, InputLabel, FormControl  } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import React from 'react'

const StyledButton = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 15,
      fontWeight: 400,
      width: 'auto',
      padding: '10px 12px',
      color: '#000000',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const StyledLabel = styled(InputLabel)({
    fontWeight: 400,
    fontSize: 16,
  })

const Input = ({id, value, onChange, label, placeholder, type}) => {
  return (
    <FormControl variant="standard">
        <StyledLabel shrink htmlFor={id}>
            {label}
        </StyledLabel>
        <StyledButton type={type} value={value} onChange={onChange} placeholder={placeholder} id={id} />
    </FormControl>
  )
}

export default Input