import { Box } from '@mui/material'
import Button from '../../components/button'
import React from 'react'
import Table from '../../components/Table'

const MyReport = () => {
  return (
    <Box>
        <Box sx={{p : 3, display : 'flex', justifyContent : 'flex-end'}}>
            <Button text='Back' />
        </Box>
        <Box sx={{p : 3}}>
            <Table />
        </Box>
    </Box>
  )
}

export default MyReport