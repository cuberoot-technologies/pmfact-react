import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { BsThreeDotsVertical } from "react-icons/bs";

const RateYourMpPage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 5.7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4.8,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="wmps" id="rateyourmppage" style={{paddingBottom:'8px'}}>
        <div className="container mt-4">
          <div className="wmps">
            <div className="container">
              <div className="rate-your-mp">
                <h1>#RateYourMP</h1>
                {/* <p>Click to search your MP</p> */}
                <Link to="/search-our-mps">
                  {" "}
                  <button className="click-here">Click Here</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="mps">
            <div className="container">
          <div className="rate-your-mp-main">
            <h1 className="mainheading"> Top Rated MPs</h1>
            <div className="populer-mp-performance">
              <Slider {...settings}>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>{" "}
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>{" "}
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>{" "}
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <img src={profile} alt="" />
                    <h1>4.52</h1>
                  </div>
                  <div className="current-rating-page">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={25}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <div className="rating-button">
                      <button className="rate-now-btn">Rate Now</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        </div>
        <div className="wmps">
        <div className="container">
          <div className="mp-performance">
            <h1  className="mainheading">Top Party MPs</h1>
            <button className="view-more-news">Search Your MP</button>
          </div>
          <div className="populer-performance">
            <p>BJP</p>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="populer-performance">
            <p>CONGRESS</p>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="populer-performance">
            <p>DMK</p>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="populer-performance">
            <p>AITC</p>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="populer-performance">
            <p>YSR</p>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>{" "}
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
              <div className="mp-performance-card">
                <div className="mp-performance-card-top">
                  <div className="mp-performance-card-left">
                    <div className="mp-performance-card-left-box">000</div>
                    <div className="mp-performance-card-left-content">
                      <h6>National Rank :</h6>
                    </div>
                  </div>
                  <div className="mp-performance-card-right">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                </div>
                <div className="mp-performance-card-body-bottom">
                  <img src={profile} alt="" />
                  <h1>4.52</h1>
                </div>
                <div className="current-rating-page">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={25}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <div className="rating-button">
                    <button className="rate-now-btn">Rate Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="mps">
      <div className="container">
        <div className="mp-performance mb-3">
          <h1  className="mainheading">Top Woman MPs</h1>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="mp-performance mb-3">
          <h1  className="mainheading">Top Youth MPs</h1>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="mps mt-4">
      <div className="container">
        <div className="mp-performance mt-4 mb-3">
          <h1  className="mainheading">Top Minister MPs</h1>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>{" "}
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <img src={profile} alt="" />
                <h1>4.52</h1>
              </div>
              <div className="current-rating-page">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={25}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rating-button">
                  <button className="rate-now-btn">Rate Now</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>      
        <div className="view-more">
          <Link to="/rate-your-mp-list">
            {" "}
            <button className="view-more-btn">View More</button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default RateYourMpPage;
