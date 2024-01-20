import React from "react";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";

const ParliamentBlogProfile = () => {
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
          slidesToShow: 2.3,
          slidesToScroll: 1.02,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="pf-blog-profile">
        <div className="pf-blog-profile-top">
          <div className="pf-blog-profile-top-img">
            <img src={profile} alt="" />
            <h1>
              Neeraj Ram Mandola <br /> Choudheer Mandola
            </h1>
            <h6>
              Samajwadi Panty <br /> Azamgarh | UP
            </h6>
          </div>
          <div className="pf-blog-profile-top-rating">
            <h6>3</h6>
            <p>
              Star <br /> MP
            </p>
          </div>
        </div>
        <div className="pf-blog-profile-center">
          <Slider {...settings}>
            <div>
              <div className="current-postion">
                <div className="current-postion-left">Current Position</div>
                <div className="current-postion-right">Current Position</div>
              </div>
            </div>
            <div>
              <div className="current-postion">
                <div className="current-postion-left">Current Position</div>
                <div className="current-postion-right">Current Position</div>
              </div>
            </div>
            <div>
              <div className="current-postion">
                <div className="current-postion-left">Current Position</div>
                <div className="current-postion-right">Current Position</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ParliamentBlogProfile;
