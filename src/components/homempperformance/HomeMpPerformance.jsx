import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Allperformance from "./Allperformance";
import Consuitency from "./attendenceperformance/constuiency/Consuitency";

const HomeMpPerformance = () => {
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
      <div className="mps">
        <div className="container">
          <div className="populer-mp-performance">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={10}
                // leftChevron={<button>{''}</button>}
                // rightChevron={<button>{''}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <button onClick={() => handleClick("button1")}>
                  Lok Sabha
                </button>
                <button onClick={() => handleClick("button2")}>
                  Constiuency
                </button>
              </ItemsCarousel>
              {renderData(
                "button1",
                <div className="wmps">
                  <Allperformance />
                </div>
              )}
              {renderData(
                "button2",
                <div className="wmps">
                  <Consuitency />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMpPerformance;
