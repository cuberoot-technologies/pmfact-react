import React from "react";
import ReactStars from "react-rating-stars-component";
import profile from "../../assets/profile.jpg";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const RateYourMp = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="gmps">
        <div className="container">
          <div className="rate-your-mp">
            <h1>#RateYourMP</h1>
            {/* <p> Click to search your MP</p> */}
            <Link to="/search-our-mps">
              {" "}
              <button className="click-here">Click Here</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mps">
        <div className="container">
          <div className="mp-performance">
            <h1>#MPs Public Rating</h1>
            <button className="filter">
              <FiFilter /> filter
            </button>
          </div>
          <div className="mp-public-rating-text">
            <p>
              Address: MP Performance, Behind Royal Cars, Aloma County Road,
              near Medipoint Hospital, Aundh, Pune, Maharashtra 411007
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="public-rating-card">
                <div className="public-rating-card-left">
                  <img src={profile} alt="" />
                </div>
                <div className="public-rating-card-middle">
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                    <p>BJP Delhi</p>
                  </div>
                </div>
                <div className="public-rating-card-right">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rate-now">
                    <button className="view-more-btn">Rate Now</button>
                  </div>
                </div>
                <div className="public-rating-card-right-dot"><BsThreeDotsVertical/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateYourMp;
