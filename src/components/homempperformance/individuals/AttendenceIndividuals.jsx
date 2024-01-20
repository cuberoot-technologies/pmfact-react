import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IndividualsBottom from "./IndividualsBottom";
import IndividualsTop from "./IndividualsTop";

const AttendenceIndividuals = () => {
  return (
    <>
      <div className="individual">
        <h3>
          {" "}
          <span className="top-line"></span>Attendence
        </h3>
        {/* <div className="individual-wrapper">
          <h3>Top to Bottom</h3>
          <button>icon Filter</button>
        </div> */}
        <div className="individuals-tab">
          <Tabs>
            <TabList>
              <Tab> TOP</Tab>
              <Tab>BOTTOM</Tab>
              <Tab> NON</Tab>
            </TabList>
            <TabPanel>
              <IndividualsTop />
            </TabPanel>
            <TabPanel>
              <IndividualsBottom />
            </TabPanel>
            <TabPanel>aaa</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AttendenceIndividuals;
