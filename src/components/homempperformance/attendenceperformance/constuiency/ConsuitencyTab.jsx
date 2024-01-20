import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ConsuitencyBottom from "./ConsuitencyBottom";
import ConsuitencyTop from "./ConsuitencyTop";

const ConsuitencyTab = () => {
  return (
    <>
      <div className="individual">
        {/* <div className="individual-wrapper">
          <h3>Top to Bottom</h3>
          <button>icon Filter</button>
        </div> */}
        <div className="individuals-tab">
          <Tabs>
            <TabList>
              <Tab>TOP</Tab>
              <Tab>BOTTOM</Tab>
              <Tab> NON</Tab>
            </TabList>

            <TabPanel>
              <ConsuitencyTop />
            </TabPanel>
            <TabPanel>
              <ConsuitencyBottom />
            </TabPanel>
            <TabPanel>aaa</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ConsuitencyTab;
