import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { BsPlay } from "react-icons/bs";
import BelowSection from "./newsandvideoshomepage/belowsection";
import CombineBox from "./newsandvideoshomepage/combined";
import ExtraNews from "./newsandvideosmain/extranews";
import MpsNews from "./newsandvideoshomepage/mpsnews";
import NewsShorts from "./newsandvideoshomepage/parliamentryshorts";
import ParliamentaryNews from "./newsandvideoshomepage/parliamentrynews";
import Trending from "./newsandvideoshomepage/trending";
import CombineBox2 from "./newsandvideoshomepage/combinedBox";

const NewsAndVideos = () => {
  return (
    <>
      <div className="news-and-videos">
        <div className="xmps">
        <Trending />
        <ParliamentaryNews />
        </div>
        <div className="desktopview">
          <CombineBox />
          <div className="adbox" >
            <img src="https://placehold.co/700x80" alt="" />
          </div>
          <ExtraNews />
          <CombineBox2 />
          <div className="adbox" >
            <img src="https://placehold.co/700x80" alt="" />
          </div>
          <BelowSection />
        </div>

        <div className="newspagecontentcontainer" id="bgcolornews">
          <NewsShorts />
        </div>

        <div className="newspagecontentcontainer" id="bgcolornew">
          <MpsNews />
        </div>
      </div>
    </>
  );
};

export default NewsAndVideos;
