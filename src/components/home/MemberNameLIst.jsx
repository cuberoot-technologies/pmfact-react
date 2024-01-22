import Slider from "react-slick";
import React from "react";
import profile from "../../assets/profile.jpg";

const MemberNameLIst = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 9.5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
     <style>{`
        .slick-prev:before,
        .slick-next:before {
          font-size: 20px;
          line-height: 1;
          opacity: 0.75;
          color: #000;
        }
      `}</style>
      <div className="mem-list">
        <div className="container mem-list">
          <Slider {...settings}>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
          <div className="member-profile-box">
            <div className="member-profile-img">
              <img src={profile} alt="" />
            </div>
            <p>Member Name Extend</p>
          </div>
        </Slider>
        </div>
      </div>
    </>
  );
};

export default MemberNameLIst;
