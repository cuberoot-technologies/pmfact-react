import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GroupAttendence from "./GroupAttendence";
import GroupDebates from "./GroupDebates";
import GroupMemberBill from "./GroupMemberBill";
import GroupQuestion from "./GroupQuestion";

const Group = () => {
  return (
    <>
      <div className="wmps">
        <div className="populer-mp-performance">
          <Tabs>
            <TabList>
              <Tab> Attendance</Tab>
              <Tab>Question</Tab>
              <Tab>Debates</Tab>
              <Tab>Pvt Member Bill</Tab>
            </TabList>
            <TabPanel>
              <GroupAttendence />
            </TabPanel>
            <TabPanel>
              <GroupQuestion />
            </TabPanel>
            <TabPanel>
              <GroupDebates />
            </TabPanel>
            <TabPanel>
              <GroupMemberBill />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Group;
