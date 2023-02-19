import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// Charts Images
import LineChart from "../../assets/Images/LineChart.png";
import PieChart from "../../assets/Images/PieChart.png";
import ColumnChats from "../../assets/Images/ColumnChats.png";

const Dashboard = () => {
  return (
    <Grid container px={8} py={4}>
      <Grid container item columns={12} justifyContent="space-between" mb={2}>

        <Grid item xs={6}>
          <Typography
            component="h5"
            variant="h5"
            fontWeight={600}
            fontSize={24}
            mb={2}
          >
            Chart1
          </Typography>
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

        <Grid item xs={5}>
          <Typography
            component="h5"
            variant="h5"
            fontWeight={600}
            fontSize={24}
            mb={2}
          >
            Chart2
          </Typography>
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
              src={PieChart}
              alt="pie chart"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

      </Grid>
      <Grid container item columns={12}>

        <Grid item xs={12}>
          <Typography
            component="h5"
            variant="h5"
            fontWeight={600}
            fontSize={24}
            mb={2}
          >
            Chart3
          </Typography>
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
  );
};

export default Dashboard;
