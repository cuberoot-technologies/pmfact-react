import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import pflogo from "../../assets/pflogo.png";
import profile from "../../assets/profile.jpg";
const PfblogsMpRating = () => {
  const percentage = 16;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="pfblogs-mp-rating">
        <div className="parliament-mp-blog">
          <div className="parliament-mp-blog-heading">
            <h1> #MPs Public Rating</h1>{" "}
            <p>
              Address: MP Performance, Behind Royal Cars, Aloma County Road,
              near Medipoint Hospital, Aundh, Pune, Maharashtra 411007
            </p>
          </div>
          <div className="individuals-top-wrapper">
            <div className="individuals-top-wrapper-head">
              <div className="individuals-top-wrapper-head-left">
                <h2>#MPsRating</h2>
              </div>
              <div className="individuals-top-wrapper-head-right">
                <div className="individuals-top-wrapper-head-right-share">
                  <BsShareFill />
                </div>
                <div className="individuals-top-wrapper-head-right-dots">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
            <div className="pfblogs-rating-mp-center">
              <div className="pfblogs-rating-mp-center-left">
                <h1>Neeraj Ram Mandola houdheer Mandola</h1>
                <p>Samajwadi Panty | Azamgarh | UP</p>
                <div className="public-rating-mp-blogs">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                  <div className="mpblogs-rating-label">
                    <h3>4.25%</h3>
                    <p>Samajwadi Panty | Azamgarh | UP</p>
                  </div>
                </div>
              </div>
              <div className="pfblogs-rating-mp-center-right">
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="pfblogs-rating-mp-bottom">
              <div className="individuals-top-wrapper-bottom-pfl">
                <img src={pflogo} alt="" width={120} height={15} />
              </div>
              <div className="rate-now">
                <button className="view-more-btn">Rate Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PfblogsMpRating;
