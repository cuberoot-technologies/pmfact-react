import React, { useState } from "react";

import ItemsCarousel from "react-items-carousel";

const TotalMemberBill = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <>
      <div className="container">
        <div className="debates-total">
          <div className="debates-heading">
            <h6>Total Number of Debate</h6>
            <h1>3211</h1>
          </div>

          <div className="debates-slide">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3.2}
                gutter={2}
                // leftChevron={<button>{''}</button>}
                // rightChevron={<button>{''}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <div className="debates-list-wrapper">
                  <h1>225%</h1>
                  <p>GovBill</p>
                </div>
                <div className="debates-list-wrapper">
                  <h1>225%</h1>
                  <p>GovBill</p>
                </div>
                <div className="debates-list-wrapper">
                  <h1>225%</h1>
                  <p>GovBill</p>
                </div>
                <div className="debates-list-wrapper">
                  <h1>225%</h1>
                  <p>GovBill</p>
                </div>
                <div className="debates-list-wrapper">
                  <h1>225%</h1>
                  <p>GovBill</p>
                </div>
              </ItemsCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalMemberBill;
