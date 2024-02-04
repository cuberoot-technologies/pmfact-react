import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";

const MpPublicRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="container">
        <div className="mp-performance ">
          <h1 className="mainheading"> #MPs Public Rating</h1>
          <button className="view-more-news">Rate Your MP</button>
        </div>
        <div className="mp-public-rating-text">
          <p>
            MP Performance, Behind Royal Cars, Aloma County Road, near Medipoint
            Hospital, Aundh, Pune, Maharashtra 411007
          </p>
        </div>
        <div className="pub-grid">
        <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div><div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div><div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div><div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div><div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div><div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="public-rating-card">
            <div className="badges">4.3</div>
            <div className="public-rating-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="public-rating-card-middle">
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                <p>
                  BJP <span>Delhi</span>
                </p>
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
                <button className="view-rate-btn">Rate Now</button>
              </div>
            </div>
            <div className="public-rating-card-right-dot">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
        
        <div className="view-more">
          <Link to="/rate-your-mp">
            <button className="view-more-btn">View More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MpPublicRating;
