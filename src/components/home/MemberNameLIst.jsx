import Slider from "react-slick";
import React from "react";
import profile from "../../assets/profile.jpg";

const MemberNameLIst = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 9,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
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
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className="mem-list">
        <div className="container mem-list">
          <Slider {...settings}>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="downarrow">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="downarrow">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="downarrow">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="up-arrow">
                  <i className="bi bi-arrow-up-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
            <div className="member-profile-box">
              <div className="member-profile-img">
                <div className="downarrow">
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </div>
                <img src={profile} alt="" />
              </div>
              <p style={{ lineHeight: '0.9rem', fontSize: '12px' }}>Member Name Extend</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MemberNameLIst;
