import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DebatedIndividualsBottom from "./DebatesIndividualsBottom";
import DebatedIndividualsTop from "./DebatesIndividualsTop";

const DebatesIndividuals = () => {
  return (
    <>
      <div className="individual">
        <h3> <span className="top-line"></span>Debates</h3>
        <div className="individuals-tab">
          <Tabs>
            <TabList>
              <Tab> TOP</Tab>
              <Tab>BOTTOM</Tab>
              <Tab> NON</Tab>
            </TabList>
            <TabPanel>
              <DebatedIndividualsTop />
            </TabPanel>
            <TabPanel>
              <DebatedIndividualsBottom />
            </TabPanel>
            <TabPanel>aaa</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DebatesIndividuals;
