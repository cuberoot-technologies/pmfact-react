import React from "react";
import { BiWalk } from "react-icons/bi";
import interruption from "../../../assets/interruption.png";
import inthewell from "../../../assets/inthewell.png";
import walkout from "../../../assets/walkout.png";

import adjourned from "../../../assets/adjourned.png";

import notrecorded from "../../../assets/notrecorded.png";

import bell from "../../../assets/bell.png";
import { Link } from "react-router-dom";



const MappingButtons = () => {
  return (
    <>
      <div className="container">
        <div className="mapping-buttons">
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={interruption} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <Link to='/in-the-well'><button>Click here</button></Link>
              </div>
            </div>
          </div>
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={inthewell} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <button>Click here</button>
              </div>
            </div>
          </div>
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={walkout} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <button>Click here</button>
              </div>
            </div>
          </div>
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={adjourned} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <button>Click here</button>
              </div>
            </div>
          </div>
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={bell} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <button>Click here</button>
              </div>
            </div>
          </div>
          <div className=" for-margin">
            <div className="mapping-button-card">
              <div className="mapping-button-card-left">
                <img src={notrecorded} alt="" />
              </div>
              <div className="mapping-button-card-middle">
                <h2>In the well</h2>
                <h1>16500</h1>
              </div>

              <div className="mapping-button-card-right">
                <button>Click here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MappingButtons;
