import React from "react";
import { FiFilter } from "react-icons/fi";
import inthewell from '../../assets/inthewell.png'

const InTheWell = () => {
  return (
    <>
      <div className="mps">
        <div className="container">
          <div className="inthewel">
            <div className="inthewel-heading">
              <h1>In the Well</h1>
              <span>Total Till Now : 23 Sep 2020</span>
            </div>
            <button className="filter"><FiFilter/> filter</button>
          </div>

          <div className="inthewell-wrapper">
            <div className="inthewell-wrapper-left">In the well</div>
            <div className="inthewell-wrapper-right">
              <img src={inthewell} alt="" /> <span>16500</span>
            </div>
          </div>

          <div className="inthewell-list">
            <span className="date-btn">15-Sep-2020</span>
            <h6>15.31hrs. : Ladakh standoff</h6>
            <p>
              Shri Adhir Ranjan Chowdhury and some other hon. Members left the
              House. from Indian National Congress on Demand Debate on
              India-China Border Issue
            </p>
          </div>
          <div className="inthewell-list">
            <span className="date-btn">15-Sep-2020</span>
            <h6>15.31hrs. : Ladakh standoff</h6>
            <p>
              Shri Adhir Ranjan Chowdhury and some other hon. Members left the
              House. from Indian National Congress on Demand Debate on
              India-China Border Issue
            </p>
          </div>
          <div className="inthewell-list">
            <span className="date-btn">15-Sep-2020</span>
            <h6>15.31hrs. : Ladakh standoff</h6>
            <p>
              Shri Adhir Ranjan Chowdhury and some other hon. Members left the
              House. from Indian National Congress on Demand Debate on
              India-China Border Issue
            </p>
          </div>
          <div className="inthewell-list">
            <span className="date-btn">15-Sep-2020</span>
            <h6>15.31hrs. : Ladakh standoff</h6>
            <p>
              Shri Adhir Ranjan Chowdhury and some other hon. Members left the
              House. from Indian National Congress on Demand Debate on
              India-China Border Issue
            </p>
          </div>
          <div className="inthewell-list">
            <span className="date-btn">15-Sep-2020</span>
            <h6>15.31hrs. : Ladakh standoff</h6>
            <p>
              Shri Adhir Ranjan Chowdhury and some other hon. Members left the
              House. from Indian National Congress on Demand Debate on
              India-China Border Issue
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InTheWell;
