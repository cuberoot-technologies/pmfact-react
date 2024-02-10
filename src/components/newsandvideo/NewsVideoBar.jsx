

import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import NewsAndVideos from "./NewsAndVideos";
import NewsAndVideoDetails from "./NewsAndVideoDetails";

const NewsVideoBar = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderData = (buttonId, data) => {
    if (activeButton === buttonId) {
      return <div>{data}</div>;
    }
    return null;
  };
  return (
    <>
      <div className="container">
        <div className="wmps" id="xmps">
          <div className="populer-mp-performance">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1.9}
                gutter={0}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {/* <button onClick={() => handleClick("button1")}>
                  Home
                </button>
                <button onClick={() => handleClick("button2")}>
                  News
                </button> */}
              </ItemsCarousel>
              {renderData(
                "button1",
                <div className="wmps" id="xmps">
                  < NewsAndVideos/>
                </div>
              )}
              {/* {renderData(
                "button2",
                <div className="wmps">
                <NewsAndVideoDetails/>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsVideoBar;
