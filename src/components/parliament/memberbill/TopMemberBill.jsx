import React from "react";
import { Link } from "react-router-dom";

const TopMemberBill = () => {
  return (
    <>
      <div className="container">
        <div className="top-ministries">
          <h2>Top 10 Topics</h2>
          <div className="top-ministries-heading-all">
            <div className="top-ministries-heading">
              <div className="top-ministries-heading-left">Ministry</div>
              <div className="top-ministries-heading-middle">
                Total question
              </div>
              <div className="top-ministries-heading-right">Percentage</div>
            </div>
            <div className="top-ministries-heading sec-min">
              <div className="top-ministries-heading-left">Ministry</div>
              <div className="top-ministries-heading-middle">
                Total question
              </div>
              <div className="top-ministries-heading-right">Percentage</div>
            </div>
          </div>
          <div className="top-ministries-details-all">
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
            <div className="top-ministries-details">
              <div className="top-ministries-details-left">
                Urban Development Urban Development
              </div>{" "}
              <div className="top-ministries-details-middle">21500</div>{" "}
              <div className="top-ministries-details-right">
                52.2 <span>%</span>
              </div>
            </div>
          </div>
          <div className="view-more">
           <Link to='/member-bill'> <button className="view-more-btn">View More</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMemberBill;
