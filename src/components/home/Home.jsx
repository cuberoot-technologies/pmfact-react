import React from "react";

import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import OurExperts from "../experts/OurExpert";
import FollowUs from "../follow/FollowUs";
import NewsandVideos from "../NewsandVideos";
import MPperformance from "../performance/MPperformance";
import TopPerformerMps from "../performance/TopPerformerMps";
import MpPublicRating from "../rating/MpPublicRating";
import MemberNameLIst from "./MemberNameLIst";
import Circles from "../circles/Circles";
import NewsvideoDesk from "../newsandvideo/NewsvideoDesk";

const Home = () => {
  return (
    <>
      <MemberNameLIst />
      <HomeFirstAdd />
      <Circles />
      <NewsvideoDesk />
      <div className="mps">
        <MPperformance />
        <TopPerformerMps />
      </div>

      <div className="mps">
        <MpPublicRating />
      </div>
     
      <div className="wmps">
        <OurExperts />
      </div>
        <FollowUs />
    </>
  );
};

export default Home;
