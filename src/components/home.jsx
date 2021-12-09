import React from "react";
import FeaturedInfo from "./featuredInfo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chart from "./chart";
import Button from "@mui/material/Button";
import PieCharts from "./piechart";
import { Link } from "react-router-dom";
import NoticeBoard from "./noticeBoard";
import { Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid sx={{ mx: "auto" }} container spacing={1}>
      <Grid item sx={{ mx: "auto" }} item xs={12} md={4}>
        <FeaturedInfo
          title="Revenue"
          value="12000"
          comparedTo="Last Quarter"
          percentage="+6%"
        ></FeaturedInfo>
      </Grid>
      <Grid item sx={{ mx: "auto" }} item xs={12} md={4}>
        <FeaturedInfo
          title="Gross Profit"
          value="3000"
          comparedTo="Last Quarter"
          percentage="+2%"
        ></FeaturedInfo>
      </Grid>

      <Grid item sx={{ mx: "auto" }} item xs={12} md={4}>
        <FeaturedInfo
          title="Net Profit"
          value="-500"
          comparedTo="Last Quarter"
          percentage="-0.5%"
        ></FeaturedInfo>
      </Grid>
      <Grid item sx={{ mx: "auto" }} item xs={12} lg={6}>
        <PieCharts></PieCharts>
      </Grid>
      <Grid mb={6} item sx={{ mx: "auto" }} item xs={12} lg={6}>
        <Card>
          <CardContent>
            <Grid>
              <Box sx={{ display: "flex" }}>
                <Grid item xs={10}>
                  <Typography fontSize={25}>Notice Board</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/new-notice">
                    <Button variant="contained">+</Button>
                  </Link>
                </Grid>
              </Box>
            </Grid>
          </CardContent>
        </Card>
        <NoticeBoard></NoticeBoard>
      </Grid>
      <Grid item xs={12}>
        <Chart></Chart>
      </Grid>
    </Grid>
  );
}
