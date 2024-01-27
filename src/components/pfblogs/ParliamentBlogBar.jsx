import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ParliamentMpBlog from "./ParliamentMpBlog";
import ParliamentPerformanceBlogMp from "./parliamentperformanceblogpage/ParliamentPerformanceBlogMp";
import ParliamentPerformanceBlogBar from "./parliamentperformanceblogpage/parliamentperformanceblogpagebar/ParliamentPerformanceBlogBar";
import PfBlogConstituency from "./pfblogsconstituency/PfBlogConstituency";
import PfBlogRating from "./pfblograting/PfBlogRating";
import NewsAndVideoDetails from "../newsandvideo/NewsAndVideoDetails";

const ParliamentBlogBar = () => {
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
      <div className="parliament-blog-bar">
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2}
            gutter={20}
            // leftChevron={<button>{''}</button>}
            // rightChevron={<button>{''}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <h3 onClick={() => handleClick("button1")}>MP's Home</h3>
            <h3 onClick={() => handleClick("button2")}>
              Parliament Performance
            </h3>
            <h3 onClick={() => handleClick("button3")}>
              Constituency Performance
            </h3>
            <h3 onClick={() => handleClick("button4")}>Public Rating</h3>
            <h3 onClick={() => handleClick("button5")}>
              News and Videos
            </h3>
          </ItemsCarousel>
          {renderData(
            "button1",
            <div className="wmps">
              <ParliamentMpBlog />
            </div>
          )}
          {renderData(
            "button2",
            <div className="wmps">
              <ParliamentPerformanceBlogMp />
              <ParliamentPerformanceBlogBar />
            </div>
          )}
          {renderData(
            "button3",
            <div className="wmps">
              <PfBlogConstituency />
            </div>
          )}
          {renderData(
            "button4",
            <div className="wmps">
              <PfBlogRating />
            </div>
          )}
          {renderData("button5", <div className="wmps"><NewsAndVideoDetails/></div>)}
        </div>
      </div>
    </>
  );
};

export default ParliamentBlogBar;
