import { Grid } from '@mui/material'
import React, { useState } from 'react'

import SideBar from "../SideBar"
import Navbar from "../Navbar/Navbar"
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Layout = ({ children }) => {

  const [current, setCurrent] = useState("Dashboard")
  const [pageName, setPageName] = useState("Dashboard")
  const nav = useNavigate()

  const onClick = (route, title) => {
    nav(route)
    setCurrent(route)
    setPageName(title)
    console.log(current);
  }

  const routes =
    [
      {
        title: "Dashboard",
        route: "/Dashboard",
      },
      {
        title: "Company details",
        route: "/Dashboard/CompanyDetails",
      },
      {
        title: "Report",
        dropList: [
          {
            title: "My Reports",
            route: "/Dashboard/MyReports",
          },
          {
            title: "GRI report",
            route: "/Dashboard/GRIreport",
          },
          {
            title: "SEBI Report",
            route: "/Dashboard/SEBIReport",
          },
          {
            title: "Customize report",
            route: "/Dashboard/Customizereport",
          },
        ],
      },
      {
        title: "Data upload",
        route: "/Dashboard/DataUpload",
      },
      {
        title: "Analytics",
        dropList: [
          {
            title: "Environment",
            route: "/Dashboard/Environment",
          },
          {
            title: "Social",
            route: "/Dashboard/Social",
          },
          {
            title: "Governance",
            route: "/Dashboard/Governance",
          },
        ],
      },
    ]

  return (
    <>
      {
        localStorage.getItem("token") ?
          <Grid container columns={6}>
            <Grid item xs={1}>
              <SideBar onClick={onClick} Links={routes} />
            </Grid>
            <Grid item xs={5}>
              <Navbar text={pageName} />
              <Outlet />
              {children}
            </Grid>
          </Grid>
          : <Navigate to={"/"} />
      }
    </>
  )
}

export default Layout