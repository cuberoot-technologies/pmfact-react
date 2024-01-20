import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AttendenceIndividual from "../../AttendenceIndividual";
import AttendenceGroup from "../../attendenceperformance/AttendenceGroup";
import ConsuitencyTab from "./ConsuitencyTab.jsx";
import Circles from "../../../circles/Circles";

const Consuitency = () => {
  return (
    <>
      <div className="all-performance">
        <Circles />
        <div className="">
          <div className="populer-mp-performance">
            <Tabs>
              <TabList>
                <Tab> Individual</Tab>
                <Tab>Group</Tab>
              </TabList>

              <TabPanel>
                <ConsuitencyTab />
              </TabPanel>
              <TabPanel>
                <AttendenceGroup/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consuitency;
