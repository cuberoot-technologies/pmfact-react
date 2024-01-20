import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";
import MostRequested from "./MostRequested";
import kharch from '../../assets/kharch.png'

const PublicVoice = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <>
      <div className="mps">
        <div className="container">
          <div className="public-voice-slider">
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1.3}
                gutter={30}
                // leftChevron={<button>{''}</button>}
                // rightChevron={<button>{''}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                <Link to="/public-voice">
                  {" "}
                  <h1>Yahan Kharch Kijiye Sansad Ji</h1>
                </Link>
                <Link to="/public-">
                  {" "}
                  <h1>Sansad Ji Puchiye Mera Sawal</h1>
                </Link>
              </ItemsCarousel>
            </div>
            <div className="kharch">
              <div className="kharch-wrapper">
                <img
                  src={kharch}
                  alt=""
                />
                <h6>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in casesItaly LombardiaItaly Lombardia reports first 2
                  coronavirus deaths amid jump in casesItaly LombardiaItaly
            
                </h6>
              </div>
              <div className="kharch-form">
                <form action="">
                  <input type="text" placeholder="Distric" />
                  <input type="text" placeholder="Place" />
                  <input type="text" placeholder="Type Your address/location" />
                  <input type="text" placeholder="Filter by Work or Type" />
                  <input type="text" placeholder="Write Your Message" />
                  <div className="kharch-form-btn">
                    <button className="click-here"> Click Here</button>
                  </div>

                  <div className="kharch-form-second">
                    <input type="text" placeholder="Type Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Mobile No" />
                    <input type="text" placeholder="Slect Age Category" />
                    <input type="text" placeholder="Enter city /Distric Name" />
                    <div className="kharch-form-btn">
                      <input className="click-here" type="submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

              <div className="kharch-cards">
                <MostRequested />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicVoice;
