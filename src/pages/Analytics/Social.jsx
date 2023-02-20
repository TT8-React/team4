import React from 'react'
import { Box, Grid } from "@mui/material";

// Charts Images
import LineChart from "../../assets/Images/LineChart.png";
import ColumnChats from "../../assets/Images/ColumnChats.png";

const Social = () => {
  return (
    <Grid container px={8} py={4} spacing={4}>
      <Grid container item columns={12} justifyContent="space-between" mb={2} spacing={6}>

        <Grid item xs={6}>
          <Box
            sx={{
              border: "1px solid #969696",
              borderRadius: "12px",
              p: "10px",
              bgcolor: "#F9F9F9",
              textAlign: "center",
              height: "350px",
            }}
          >
            <img
              src={LineChart}
              alt="line chart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              border: "1px solid #969696",
              borderRadius: "12px",
              p: "10px",
              bgcolor: "#F9F9F9",
              textAlign: "center",
              height: "350px",
            }}
          >
            <img
              src={LineChart}
              alt="pie chart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

      </Grid>
      <Grid container item columns={12}>

        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid #969696",
              borderRadius: "12px",
              p: "10px",
              bgcolor: "#F9F9F9",
              textAlign: "center",
              height: "350px",
            }}
          >
            <img
              src={ColumnChats}
              alt="pie chart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default Social