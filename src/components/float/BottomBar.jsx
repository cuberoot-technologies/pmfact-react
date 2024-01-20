import React from "react";
import { BsBarChart, BsNewspaper, BsPlay, BsStar } from "react-icons/bs";

const BottomBar = () => {
  return (
    <>
      <div className="bottombar">
        <div className="bb-first">
          <BsBarChart />
          <p>MPs Performance</p>
        </div>
        <div className="bb-sec">
          <div className="bb-sec-star">
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <p>Rate Your MP</p>
        </div>

        <div className="bb-th">
            <BsPlay/>
            <p>Videos</p>
        </div>

        <div className="bb-for">
            <BsNewspaper/>
            <p>News</p>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
