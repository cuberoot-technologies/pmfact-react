import React, { PureComponent } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Questionsparliament = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const percentage = 66;

  return (
    <>
      <div className="attendence">
        <div className="Questionsparliament">
          <div className="attendence-wrapper-left">
            <h2>Attendance</h2>
            <p>Updated data: till 23 Sep 2020</p>
          </div>
          <div className="attendence-wrapper-right">
            <p>Overall</p>

            <h1>
              52.25<span>%</span>
            </h1>
          </div>
        </div>
        <div className=" attendence-bottom-padding">
          <div className="attendence-bottom">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="progresbars">
          <div className="container">
            <div className="progress-round">
            <div className="single-circle-wrapper">
          <div className="single-circle-wrapper-progress">
            <div style={{ width: 90, height: 90 }}>
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  rotation: 0.5,
                  textSize: "16px",
                  textColor: "#f88",
                })}
              />
            </div>
          </div>
          <div className="single-circle-wrapper-details">
            <h3>
              {percentage} <span>%</span>
            </h3>
            <p>Productivity</p>
          </div>
        </div>
        <div className="single-circle-wrapper">
          <div className="single-circle-wrapper-progress">
            <div style={{ width: 90, height: 90 }}>
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  rotation: 0.5,
                  textSize: "16px",
                  textColor: "#f88",
                })}
              />
            </div>
          </div>
          <div className="single-circle-wrapper-details">
            <h3>
              {percentage} <span>%</span>
            </h3>
            <p>Productivity</p>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionsparliament;
