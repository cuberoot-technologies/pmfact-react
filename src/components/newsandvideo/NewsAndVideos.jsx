import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { BsPlay } from "react-icons/bs";

const NewsAndVideos = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.06,
          slidesToScroll: 1.05,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  var settingsFirst = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <HomeFirstAdd />
      <div className="xmps">

        <div className="news-and-videos">
          <div className="news-and-videos-top">
            <div className="sliderbox">
              <Slider {...settings}>
                <div className="breaking-news">
                  <div className="news-content-container">
                    <div className="news-image-container">
                      <div className="trending">Trending</div>
                      <Link to="/news-and-videos-category">
                        <div className="image-container">
                          <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                          />
                          <div className="overlay"></div>
                          <div className="caption-news">
                            <p><BsPlay /></p>
                            <h6>Entertainment</h6>
                            <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                            <span>12 jan 2023</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="text-news-container">
                      <div className="newsmainheading">
                        <h2>Watch:10 days Later: What Italians Wish They Had Known</h2>
                      </div>
                      <div className="catergory-box">Video</div>
                      <div className="categorybox">
                        <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                        <p>19/03/2020-10:48</p>
                      </div>
                      <div className="categorytext">
                        <p>A supermarket worker was spat at by a customer attempting to
                          stockpile Pot Noodles while another was told: "I hope you you
                          get the virus...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="breaking-news">
                  <div className="news-content-container">
                    <div className="news-image-container">
                      <div className="trending">Trending</div>
                      <Link to="/news-and-videos-category">
                        <div className="image-container">
                          <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                          />
                          <div className="overlay"></div>
                          <div className="caption-news">
                            <p><BsPlay /></p>
                            <h6>Entertainment</h6>
                            <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                            <span>12 jan 2023</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="text-news-container">
                      <div className="newsmainheading">
                        <h2>Watch:10 days Later: What Italians Wish They Had Known</h2>
                      </div>
                      <div className="catergory-box">Video</div>
                      <div className="categorybox">
                        <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                        <p>19/03/2020-10:48</p>
                      </div>
                      <div className="categorytext">
                        <p>A supermarket worker was spat at by a customer attempting to
                          stockpile Pot Noodles while another was told: "I hope you you
                          get the virus...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="breaking-news">
                  <div className="news-content-container">
                    <div className="news-image-container">
                      <div className="trending">Trending</div>
                      <Link to="/news-and-videos-category">
                        <div className="image-container">
                          <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                          />
                          <div className="overlay"></div>
                          <div className="caption-news">
                            <p><BsPlay /></p>
                            <h6>Entertainment</h6>
                            <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                            <span>12 jan 2023</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="text-news-container">
                      <div className="newsmainheading">
                        <h2>Watch:10 days Later: What Italians Wish They Had Known</h2>
                      </div>
                      <div className="catergory-box">Video</div>
                      <div className="categorybox">
                        <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                        <p>19/03/2020-10:48</p>
                      </div>
                      <div className="categorytext">
                        <p>A supermarket worker was spat at by a customer attempting to
                          stockpile Pot Noodles while another was told: "I hope you you
                          get the virus...</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="breaking-news">
                  <div className="news-content-container">
                    <div className="news-image-container">
                      <div className="trending">Trending</div>
                      <Link to="/news-and-videos-category">
                        <div className="image-container">
                          <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                          />
                          <div className="overlay"></div>
                          <div className="caption-news">
                            <p><BsPlay /></p>
                            <h6>Entertainment</h6>
                            <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                            <span>12 jan 2023</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="text-news-container">
                      <div className="newsmainheading">
                        <h2>Watch:10 days Later: What Italians Wish They Had Known</h2>
                      </div>
                      <div className="catergory-box">Video</div>
                      <div className="categorybox">
                        <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                        <p>19/03/2020-10:48</p>
                      </div>
                      <div className="categorytext">
                        <p>A supermarket worker was spat at by a customer attempting to
                          stockpile Pot Noodles while another was told: "I hope you you
                          get the virus...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="middle-news-box">
            <div className="news-and-videos-parlimentry-news">
              <div className="parlimentry-news">
                <h4 className="mainheading" >Main News</h4>
                <button className="view-more-news">View More</button>
              </div>
              <div className="parlimentry-news-list">
                <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
                  <img src={profile} alt="" />
                  <div className="catergory-box">Video</div>
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <button className="read-more">Read More</button>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                  <img src={profile} alt="" />
                  <div className="catergory-box">Video</div>
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <button className="read-more">Read More</button>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                  <img src={profile} alt="" />
                  <div className="catergory-box">Video</div>
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <button className="read-more">Read More</button>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                  <img src={profile} alt="" />
                  <div className="catergory-box">Video</div>
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="combinedbox">

            <div className="left-news-container">
              <div className="leftnewsimage">
                <img src="https://placehold.co/500x300" />
              </div>

              <div className="catergory-box">Video</div>

              <div className="leftnewstext">
                <h2>Virus Confronts leaders with one of modern history gravest chanllenges</h2>
                <div className="leftnewspara">
                  <p style={{ marginRight: '1rem' }}><b>Stepher Romero</b></p>
                  <p>19/03/2020 - 10:49</p>
                </div>
              </div>

            </div>

            <div className="middle-news-container">
              <div className="news-and-videos-parlimentry-news">
                <div className="parlimentry-news">
                  <h4 className="mainheading" >Main News</h4>
                  <button className="view-more-news">View More</button>
                </div>
                <div className="parlimentry-news-list">
                  <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
                    <img src={profile} alt="" />
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                  <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                    <img src={profile} alt="" />
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-news-container">
              <hr />
              <h3>Virus Confronts</h3>
              <div className="rightnewsboxes">

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="adbox">
            <img src="https://placehold.co/700x80" alt="" />
          </div>

          <div className="middle-new-box">
            <div className="middleboxes">
              <div className="middlebox">
                <div className="middleboximage">
                  <img src={profile} alt="" />
                </div>
                <div className="catergory-box">Video</div>
                <div className="middleboxtext">
                  <p style={{ fontSize: '13px' }}>Door slmas at the person in europe in geneva switzerland</p>
                  <p style={{ fontSize: '10px', color: '#444' }}>19-08-2002 - 10:49</p>
                </div>
              </div>
              <div className="middlebox">
                <div className="middleboximage">
                  <img src={profile} alt="" />
                </div>
                <div className="catergory-box">Video</div>
                <div className="middleboxtext">
                  <p style={{ fontSize: '13px' }}>Door slmas at the person in europe in geneva switzerland</p>
                  <p style={{ fontSize: '10px', color: '#444' }}>19-08-2002 - 10:49</p>
                </div>
              </div>
              <div className="middlebox">
                <div className="middleboximage">
                  <img src={profile} alt="" />
                </div>
                <div className="catergory-box">Video</div>
                <div className="middleboxtext">
                  <p style={{ fontSize: '13px' }}>Door slmas at the person in europe in geneva switzerland</p>
                  <p style={{ fontSize: '10px', color: '#444' }}>19-08-2002 - 10:49</p>
                </div>
              </div>
              <div className="middlebox">
                <div className="middleboximage">
                  <img src={profile} alt="" />
                </div>
                <div className="catergory-box">Video</div>
                <div className="middleboxtext">
                  <p style={{ fontSize: '13px' }}>Door slmas at the person in europe in geneva switzerland</p>
                  <p style={{ fontSize: '10px', color: '#444' }}>19-08-2002 - 10:49</p>
                </div>
              </div>
              <div className="middlebox">
                <div className="middleboximage">
                  <img src={profile} alt="" />
                </div>
                <div className="catergory-box">Video</div>
                <div className="middleboxtext">
                  <p style={{ fontSize: '13px' }}>Door slmas at the person in europe in geneva switzerland</p>
                  <p style={{ fontSize: '10px', color: '#444' }}>19-08-2002 - 10:49</p>
                </div>
              </div>
            </div>
          </div>

          <div className="combinedbox">

            <div className="left-news-container">
              <div className="leftnewsimage">
                <img src="https://placehold.co/500x300" />
              </div>

              <div className="catergory-box">Video</div>

              <div className="leftnewstext">
                <h2>Virus Confronts leaders with one of modern history gravest chanllenges</h2>
                <div className="leftnewspara">
                  <p style={{ marginRight: '1rem' }}><b>Stepher Romero</b></p>
                  <p>19/03/2020 - 10:49</p>
                </div>
              </div>

            </div>

            <div className="middle-news-container">
              <div className="news-and-videos-parlimentry-news">
                <div className="parlimentry-news">
                  <h4 className="mainheading" >Main News</h4>
                  <button className="view-more-news">View More</button>
                </div>
                <div className="parlimentry-news-list">
                  <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
                    <img src={profile} alt="" />
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                  <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                    <img src={profile} alt="" />
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-news-container">
              <div className="adsbox">
                <img src="https://placehold.co/230x200" alt="" />
              </div>
              <h3>Virus Confronts</h3>
              <div className="rightnewsboxes">

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="adbox">
            <img src="https://placehold.co/700x80" alt="" />
          </div>


          <div className="combinedbox">
            <div className="left-news-container">
              <div className="parlimentry-news-list">
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle-news-container">
              <div className="adsbox">
                <img src="https://placehold.co/230x200" alt="" />
              </div>
              <div className="rightnewsboxes">

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="right-news-container">

            </div>
          </div>

        </div>

        <div className="parliabox">
          <div className="news-and-videos-shorts">
            <div className="parlimentry-news">
              <h4 className="mainheading">Parliamentry Shorts</h4>
              <button className="view-more-news">View More</button>
            </div>
            <Slider {...settingsFirst}>
              <div className="breaking-news-shorts">
                <img src={profile} width="100%" height={300} alt="" />
                <div className="breaking-news-shorts-content">
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  <div className="time-play">
                    <button className="btn-time">10:30</button>{" "}
                    <span>
                      <BsPlay />{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="breaking-news-shorts">
                <img src={profile} width="100%" height={300} alt="" />
                <div className="breaking-news-shorts-content">
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  <div className="time-play">
                    <button className="btn-time">10:30</button>{" "}
                    <span>
                      <BsPlay />{" "}
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className="breaking-news-shorts">
                <img src={profile} width="100%" height={300} alt="" />
                <div className="breaking-news-shorts-content">
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  <div className="time-play">
                    <button className="btn-time">10:30</button>{" "}
                    <span>
                      <BsPlay />{" "}
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className="breaking-news-shorts">
                <img src={profile} width="100%" height={300} alt="" />
                <div className="breaking-news-shorts-content">
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  <div className="time-play">
                    <button className="btn-time">10:30</button>{" "}
                    <span>
                      <BsPlay />{" "}
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className="breaking-news-shorts">
                <img src={profile} width="100%" height={300} alt="" />
                <div className="breaking-news-shorts-content">
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  <div className="time-play">
                    <button className="btn-time">10:30</button>{" "}
                    <span>
                      <BsPlay />{" "}
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>


        <div className="parliabox">
          <div className="parliament-news-video-mp-news">
            <div className="parlimentry-news">
              <h4 className="mainheading" style={{ marginLeft: '1rem', textAlign: 'center' }}>MPs News</h4>
              <button className="view-more-news">View More</button>
            </div>
            <div className="news-pu">

              <div className="parliament-news-video-mp-news-list">
                <img src={profile} alt="" />
                <div className="parliament-news-video-mp-news-list-content">
                  <p>Rahul on Bharat Jodo Yatra</p>
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  {/* <span>January 10,2023</span> */}
                </div>
              </div>

              <div className="mplinecontainer">
                <hr className="mpline" />
              </div>

              <div className="parliament-news-video-mp-news-list">
                <img src={profile} alt="" />
                <div className="parliament-news-video-mp-news-list-content">
                  <p>Rahul on Bharat Jodo Yatra</p>
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  {/* <span>January 10,2023</span> */}
                </div>
              </div>{" "}
              <div className="mplinecontainer">
                <hr className="mpline" />
              </div>
              <div className="parliament-news-video-mp-news-list">
                <img src={profile} alt="" />
                <div className="parliament-news-video-mp-news-list-content">
                  <p>Rahul on Bharat Jodo Yatra</p>
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  {/* <span>January 10,2023</span> */}
                </div>
              </div>{" "}

              <div className="mplinecontainer">
                <hr className="mpline" />
              </div>

              <div className="parliament-news-video-mp-news-list">
                <img src={profile} alt="" />
                <div className="parliament-news-video-mp-news-list-content">
                  <p>Rahul on Bharat Jodo Yatra</p>
                  <h2>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h2>
                  {/* <span>January 10,2023</span> */}
                </div>
              </div>
            </div>

            <div className="view-more p-3">
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default NewsAndVideos;
