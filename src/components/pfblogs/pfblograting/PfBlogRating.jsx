import ReactStars from "react-rating-stars-component";
import React from "react";
import profile from "../../../assets/profile.jpg";
import PfBlogRatingCard from "./PfBlogRatingCard";

const PfBlogRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="pf-blog-rating">
      <div className="result-mps-card">
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
        </div>
      </div>
      <PfBlogRatingCard />
    </div>
  );
};

export default PfBlogRating;
