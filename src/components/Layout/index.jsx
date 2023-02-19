import { Grid } from '@mui/material'
import React from 'react'

import SideBar from "../SideBar"
import Navbar from "../Navbar/Navbar"
import { Outlet } from 'react-router-dom'

const Layout = ({pageName, children}) => {
  return (
    <Grid container columns={6}>
        <Grid item xs={1}>
            <SideBar />
        </Grid>
        <Grid item xs={5}>
            <Navbar text={pageName} />
            <Outlet />
            {children}
        </Grid>
    </Grid>
  )
}

export default Layout