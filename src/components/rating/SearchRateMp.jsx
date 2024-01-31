import React from "react";
import ReactStars from "react-rating-stars-component";
import profile from "../../assets/profile.jpg";
import RateYourMpPage from "./RateYourMpPage";

const SearchRateMp = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="mps">
        <div className="container">
          <div className="our-mps mt-3">
            <h1>Search Your Mps</h1>
            <div className="ourmps-form">
              <form action="">
                <div className="form-top">
                  <input type="text" placeholder="Type Name" />
                  <input type="text" placeholder="Select State & UT" />
                </div>
                <div className="form-bottom">
                  <input type="text" placeholder="Search By" />
                  <input
                    type="text"
                    placeholder=" Select Consuitency / District"
                  />

                  <input type="text" placeholder="Selct Place" />
                </div>
                <div className="form-btn">
                  <button className="submit-btn">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="result-mps-card-bg">
        <div className="container">
          <div className="result-mps-card">
            <h1>Select MP</h1>
            <div className="result-mps-card-wrapper">
              <div className="result-mps-card-wrapper-img">
                <img src={profile} alt="" />
              </div>
              <div className="result-mps-card-wrapper-content">
                <h6>Neeraj Ram Mandola houdheer Mandola</h6>
                <p>
                  Samajwadi Panty <br />
                  Azamgarh <br />
                  Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="current-rating">
              <h2>Current Rating</h2>
              <div className="current-rating-wrapper">
                <div className="current-rating-wrapper-rating">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <p>
                    Performance: <span>Satisfactory</span>
                  </p>
                </div>
                <div className="current-rating-wrapper-btn">
                  <button className="rating-display">4.98</button>
                </div>
              </div>
              <div className="current-rating-wrapper-display">
                <button className="rating-display">Rate Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rate-mp-page">
        <RateYourMpPage/>
      </div>
    </>
  );
};

export default SearchRateMp;
