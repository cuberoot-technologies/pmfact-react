import React from "react";
import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import profile from "../../assets/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MPperformance = () => {
  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isThreeDotsClicked, setThreeDotsClicked] = useState(false);
  const performanceCardRef = useRef(null);

  const handleThreeDotsClick = (e) => {
    e.stopPropagation(); // Stop the event from propagating to document click handler
    setThreeDotsClicked(!isThreeDotsClicked);
  };

  const handleClickOutside = (event) => {
    if (performanceCardRef.current && !performanceCardRef.current.contains(event.target)) {
      setThreeDotsClicked(false);
    }
  };
  const handleShareClick = () => {
    setShowSharePopup(true);
  };

  const handleClosePopup = () => {
    setShowSharePopup(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="mp-performance">
          <h1 className="mainheading">
            #MP Performance
          </h1>
          <button className="view-more-news">Search Your MP</button>
        </div>
        <div className="populer-performance">
          <p>Populer MP Performance</p>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mp-performance-card ${isThreeDotsClicked ? 'flipped' : ''}`}
              ref={performanceCardRef}
            >
              <div className="mp-performance-card-inner">
                <div className="mp-performance-card-front">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right" onClick={handleThreeDotsClick}>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>
                      52.9 <span style={{ fontSize: '1.5rem' }}>%</span>
                    </h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div className="mp-performance-card-back">
                  <div className="mp-performance-card-share">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MPperformance;
