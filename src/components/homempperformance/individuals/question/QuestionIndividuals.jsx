import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import QuestionIndividualsBottom from "./QuestionIndividualsBottom";
import QuestionIndividualsTop from "./QuestionIndividualsTop";

const QuestionIndividuals = () => {
  return (
    <>
      <div className="individual">
        <h3>
          <span className="top-line"></span>Question
        </h3>
        <div className="individuals-tab">
          <Tabs>
            <TabList>
              <Tab> TOP</Tab>
              <Tab>BOTTOM</Tab>
              <Tab> NON</Tab>
            </TabList>
            <TabPanel>
              <QuestionIndividualsTop />
            </TabPanel>
            <TabPanel>
              <QuestionIndividualsBottom />
            </TabPanel>
            <TabPanel>aaa</TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default QuestionIndividuals;
