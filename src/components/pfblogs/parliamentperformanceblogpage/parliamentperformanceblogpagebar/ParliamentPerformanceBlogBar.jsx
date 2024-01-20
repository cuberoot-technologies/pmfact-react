import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ParliamentPerformanceBlogAttendence from "./ParliamentPerformanceBlogAttendence";

const ParliamentPerformanceBlogBar = () => {
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
            numberOfCards={4}
            gutter={20}
            // leftChevron={<button>{''}</button>}
            // rightChevron={<button>{''}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <button onClick={() => handleClick("button1")}>Attendence</button>
            <button onClick={() => handleClick("button2")}>Question</button>
            <button onClick={() => handleClick("button3")}>Debates</button>
            <button onClick={() => handleClick("button4")}>Pvt member</button>
          </ItemsCarousel>
          {renderData(
            "button1",
            <div className="wmps">
              <ParliamentPerformanceBlogAttendence />
            </div>
          )}
          {renderData("button2", <div className="wmps">dssd</div>)}
          {renderData("button3", <div className="wmps">dssddaa</div>)}
          {renderData("button4", <div className="wmps">dssdssss</div>)}
          {renderData("button5", <div className="wmps">dssdaaaa</div>)}
        </div>
      </div>
    </>
  );
};

export default ParliamentPerformanceBlogBar;
