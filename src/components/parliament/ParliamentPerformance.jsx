import React from "react";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import HighLights from "../HighLights";
import MemberNameLIst from "../home/MemberNameLIst";
import Attendence from "./Attendence";
import GovBill from "./govtbill/GovBill";
import TopGovtBill from "./govtbill/TopGovtBill";
import TotalGovtBill from "./govtbill/TotalGovtBill";
import LsPermformance from "./lsperformances/LsPermformance";
import MemberBill from "./memberbill/MemberBill";
import TopMemberBill from "./memberbill/TopMemberBill";
import TotalMemberBill from "./memberbill/TotalMemberBill";
import MappingButtons from "./parliamentmapping/MappingButtons";
import Debates from "./questions/debates/Debates";
import TopDebate from "./questions/debates/TopDebate";
import TotalDebates from "./questions/debates/TotalDebates";
import QuestionMinistries from "./questions/QuestionMinistries";
import Questionsparliament from "./questions/Questionsparliament";
import TopTopics from "./questions/TopTopics";
import Circles from "../circles/Circles";
import SingleCircle from "../circles/SingleCircle";

const ParliamentPerformance = () => {
  return (
    <>
      <MemberNameLIst />
      <HomeFirstAdd />
      <div className="mps">
        <LsPermformance />
        <SingleCircle/>
        <Circles/>
      </div>
      <div className="mps">
        <MappingButtons />
      </div>
      <Attendence />
      <Questionsparliament />
      <div className="mps">
        <QuestionMinistries />
      </div>
      <div className="mps">
        <TopTopics />
      </div>
      <div className="wmps">
        <Debates />
      </div>
      <div className="mps">
        <TotalDebates />
        <TopDebate />
      </div>
      <div className="wmps">
        <MemberBill />
      </div>
      <div className="mps">
        <TotalMemberBill />
        <TopMemberBill />
      </div>
      <div className="wmps">
        <GovBill />
      </div>
      <div className="mps">
        <TotalGovtBill />
        <TopGovtBill />
      </div>
      <div className="wmps">
        <HighLights />
      </div>
    </>
  );
};

export default ParliamentPerformance;
