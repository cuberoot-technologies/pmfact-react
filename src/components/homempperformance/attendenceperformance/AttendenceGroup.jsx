import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ItemsCarousel from "react-items-carousel";

const AttendenceGroup = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const percentage = 66;
  const chevronWidth = 0;
  return (
    <><div className="group-attendence-heading">
      <h1>Constituency Performance</h1>
    </div>
      <div className="group-attendence">
        <p>Gender Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="group-attendence">
        <p>Age Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="group-attendence">
        <p>State Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="group-attendence">
        <p>Party Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="group-attendence">
        <p>Profaction Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="group-attendence">
        <p>Category Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2.1}
              gutter={10}
              // leftChevron={<button>{''}</button>}
              // rightChevron={<button>{''}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>

              <div className="group-attendence-card">
                <div className="group-attendence-card-top">
                  <div className="group-attendence-card-top-heading">
                    <div className="group-attendence-card-top-number">000</div>
                    <h6>National Rank :</h6>
                  </div>

                  <div className="group-attendence-card-top-content">
                    <div className="group-attendence-card-top-graph">grra</div>
                    <p>Dadra and Nagar Haveli</p>
                  </div>
                </div>
                <div className="group-attendence-card-bottom">
                  <div className="group-attendence-card-bottom-range">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <div className="individual-list-right-outof">
                    <h1>40</h1>
                    <p>out of</p>
                    <h1>80</h1>
                  </div>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendenceGroup;
