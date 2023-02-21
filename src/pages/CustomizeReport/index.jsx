import { Box } from '@mui/material'
import Button from '../../components/button'
import React from 'react'
import TransferList from '../../components/TransferList'

const CustomizeReport = () => {
  return (
    <Box>
        <Box sx={{p : 3, display : 'flex', justifyContent : 'flex-end'}}>
            <Button text='Back' />
        </Box>
        <Box sx={{p : 3}}>
            <TransferList />
        </Box>
    </Box>
  )
}

export default CustomizeReport