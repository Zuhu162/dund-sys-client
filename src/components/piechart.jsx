import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import CircleIcon from "@mui/icons-material/Circle";
import CardContent from "@mui/material/CardContent";

export default function PieCharts() {
  const [data, setData] = useState([
    { name: "Dwight Shrute", value: 0 },
    { name: "Jim Halpert", value: 2 },
    { name: "Stanley Hudson", value: 3 },
    { name: "Phyllis Vance", value: 5 },
    { name: "Andrew Bernard", value: 2 },
  ]);

  let salesData = [];

  useEffect(() => {
    const fetchSalesData = async () => {
      const res = await axios.get("/clients");
      res.data.forEach((item) => {
        salesData.push(item.salesRep);
      });
      for (let i = 0; i < salesData.length - 1; i++) {
        if (salesData[i].name === "Dwight Shrute") {
          let temp = [...data];
          temp[0].value += 1;
          setData(temp);
        } else if (salesData[i].name === "Jim Halpert") {
          let temp = [...data];
          temp[1].value += 1;
          setData(temp);
        } else if (salesData[i].name === "Stanley Hudson") {
          let temp = [...data];
          temp[2].value += 1;
          setData(temp);
        } else if (salesData[i].name === "Phyllis Vance") {
          let temp = [...data];
          temp[3].value += 1;
          setData(temp);
        } else if (salesData[i].name === "Andrew Bernard") {
          let temp = [...data];
          temp[4].value += 1;
          setData(temp);
        }
      }
    };
    fetchSalesData();
  }, data);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#7C007C"];

  return (
    <Card sx={{ mb: 2, mr: 1 }}>
      <Grid container>
        <Grid xs={12} item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Typography variant="h5" component="div">
              Clients and Sales Reps
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ zIndex: "tooltip" }} item xs={12} sm={6}>
          <CardContent>
            <PieChart width={800} height={400}>
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip></Tooltip>
            </PieChart>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            mt={10}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ mb: 1.5, fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              <ul className="list-group list-group-flush">
                <li class="list-group-item">
                  <CircleIcon sx={{ color: "#0088FE" }} />
                  Dwight Shrute
                </li>
                <li class="list-group-item">
                  <CircleIcon sx={{ color: "#00C49F" }} />
                  Jim Halpert
                </li>
                <li class="list-group-item">
                  <CircleIcon sx={{ color: "#FFBB28" }} />
                  Stanley Hudson
                </li>
                <li class="list-group-item">
                  <CircleIcon sx={{ color: "#FF8042" }} />
                  Phyllis Vance
                </li>
                <li class="list-group-item">
                  <CircleIcon sx={{ color: "#7C007C" }} />
                  Andy Bernard
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
