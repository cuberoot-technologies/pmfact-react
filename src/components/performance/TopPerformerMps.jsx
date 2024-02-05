import React from "react";
import Slider from "react-slick";

import profile from "../../assets/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
const TopPerformerMps = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
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
  return (
    <>
     <div className="container" style={{background:'transparent linear-gradient rgba(0,0,0,0)'}}>
        <div className="mp-performance">
          <h1 className="mainheading">#TopMP Performance</h1>
          <button className="view-more-news">Search Your MP</button>
        </div>
        <div className="populer-performance">
          <p>Populer MP Performance</p>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
          </Slider>
          <Slider {...settings} style={{marginTop:'1rem'}}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
          </Slider>
          <Slider {...settings} style={{marginTop:'1rem'}}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
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
              <h1>52.9 <span style={{ fontSize: '1.5rem' }}>%</span></h1>
                <img src={profile} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopPerformerMps;
