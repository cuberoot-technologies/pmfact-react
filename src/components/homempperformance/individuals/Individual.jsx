import React from "react";
import AttendenceIndividuals from "./AttendenceIndividuals";
import DebatesIndividuals from "./debates/DebatesIndividuals";
import PvtMemberIndividuals from "./pvtmember/PvtMemberIndividuals";
import QuestionIndividuals from "./question/QuestionIndividuals";


const Individual = () => {
  const percentage = 66;

  return (
    <>
      <div className="wmps">
        <AttendenceIndividuals/>
      </div>
      <div className="wmps">
        <QuestionIndividuals/>
      </div>
      <div className="wmps">
        <DebatesIndividuals/>
      </div>
      <div className="wmps">
        <PvtMemberIndividuals/>
      </div>
    </>
  );
};

export default Individual;
