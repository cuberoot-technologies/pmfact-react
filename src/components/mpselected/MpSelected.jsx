import React from "react";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";

const MpSelected = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1.02,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="mp-selected">
          <h1>Selected MP</h1>
          <div className="mp-selected-wrapper">
            <div className="mp-selected-wrapper-left">
              <img src={profile} alt="" />
            </div>
            <div className="mp-selected-wrapper-right">
              <h1>Neeraj Ram Mandola houdheer Mandola</h1>
              <p>
                Samajwadi Panty <br /> Azamgarh Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
        <div className="selected-design">
          <h1>Select Design</h1>
          <Slider {...settings}>
            <div>
              <div className="select-img">
                <img src={profile} alt="" />
              </div>
            </div>
            <div>
              <div className="select-img">
                <img src={profile} alt="" />
              </div>
            </div>
            <div>
              <div className="select-img">
                <img src={profile} alt="" />
              </div>
            </div>
            <div>
              <div className="select-img">
                <img src={profile} alt="" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="mp-selected-form">
          <h2>Please fill out your details</h2>
          <form action="">
            <div className="radio-btn">
              <div className="radio-btns">
                <input type="radio" /> <label htmlFor="">male</label>
              </div>
              <div className="radio-btns">
                <input type="radio" /> <label htmlFor="">Female</label>
              </div>
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
    </>
  );
};

export default MpSelected;
