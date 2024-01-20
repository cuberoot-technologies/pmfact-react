import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PvtMemberIndividualsBottom from "./PvtMemberIndividualsBottom";
import PvtMemberIndividualsTop from "./PvtMemberIndividualsTop";

const PvtMemberIndividuals = () => {
  return (
    <>
      <div className="individual">
        <h3><span className="top-line"></span>Pvt Member Bill</h3>
        <div className="individuals-tab">
          <Tabs>
            <TabList>
              <Tab> TOP</Tab>
              <Tab>BOTTOM</Tab>
              <Tab> NON</Tab>
            </TabList>
            <TabPanel>
              <PvtMemberIndividualsTop />
            </TabPanel>
            <TabPanel>
              <PvtMemberIndividualsBottom />
            </TabPanel>
            <TabPanel>aaa</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PvtMemberIndividuals;
