import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

// import "chart.css";

export default function Chart() {
  const [data, setData] = useState([
    {
      year: "2017",
      value: 31,
    },
    {
      year: "2016",
      value: 22,
    },
    {
      year: "2018",
      value: 11,
    },
    {
      year: "2019",
      value: 16,
    },
    {
      year: "2020",
      value: 1,
    },
    {
      year: "2021",
      value: 0,
    },
    {
      year: "2022",
      value: 0,
    },
    {
      year: "2023",
      value: 0,
    },
  ]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const res = await axios.get("https://dundsys.herokuapp.com/api/clients");

      for (let i = 0; i < res.data.length - 1; i++) {
        const date = res.data[i].dateAdded;
        if (date.includes("2021")) {
          const temp = [...data];
          temp[5].value++;
          setData(temp);
        } else if (date.includes("2023")) {
          const temp = [...data];
          temp[6].value++;
          setData(temp);
        } else if (date.includes("2023")) {
          const temp = [...data];
          temp[7].value++;
          setData(temp);
        }
      }
    };
    fetchGraphData();
  }, []);

  return (
    <Card sx={{ mb: 2, mr: 1 }}>
      <CardContent>
        <Typography sx={{ mb: 5 }} fontSize={30}>
          Clients Gained per year
        </Typography>
        <ResponsiveContainer aspect={3 / 1} width="100%">
          <LineChart data={data}>
            <XAxis dataKey="year" stroke="#5550bd"></XAxis>
            <YAxis stroke="#5550bd"></YAxis>
            <Line type="monotone" dataKey="value" stroke="#5550bd"></Line>
            <Tooltip></Tooltip>
            <CartesianGrid
              strokeDasharray="5 5"
              stroke="#e0dfdf"
            ></CartesianGrid>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
