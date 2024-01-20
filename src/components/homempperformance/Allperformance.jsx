import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Individual from "./individuals/Individual";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Group from "./groupperformance/Group";
import Circles from "../circles/Circles";

const Allperformance = () => {
  return (
    <>
      <div className="all-performance">
        <Circles/>
        <div className="wmps">
          <div className="populer-mp-performance">
            <Tabs>
              <TabList>
                <Tab> Individual</Tab>
                <Tab>Group</Tab>
              </TabList>

              <TabPanel>
                <Individual />
              </TabPanel>
              <TabPanel>
                <Group/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allperformance;
