import React from "react";
import Slider from "react-slick";
import { BsPlay } from "react-icons/bs";
import profile from "../../assets/profile.jpg";

const NewsvideoDesk = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsFirst = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="mbt">
        <div className="container">
          <div className="newsandvideo">
            <h1> <span className="top-line"></span>News & Videos</h1>
          </div>
          <div className="news-desk-slide-top">
            <div className="news-desk-slide">
              <Slider {...settings}>
                <div className="news-desk">
                  <div className="news-desk-top">
                    <div className="news-desk-top-left">
                      <img src={profile} alt="" />
                    </div>
                    <div className="news-desk-top-right">
                      <h1>
                        इस मामले में ओवरसाइट कमेटी ने तीन बातें पाईं. यौन
                        उत्पीडन की शिकायतों पर समाधान के लिए उचित फ़ोरम और
                      </h1>
                      <div className="news-desk-author">
                        <h5>V1sh@l Singh </h5>
                        <h5>19/03/2023 - 10:48</h5>
                      </div>
                      <p>
                        रियो ओलंपिक की कांस्य पदक विजेता साक्षी मलिक ने कहा,
                        ‘‘हम जंतर-मंतर से नहीं हटेंगे. यह लड़ाई नहीं रुकेगी.’’
                        उन्होंने कहा,‘‘ लड़कियां (महिला पहलवान) समिति के सामने
                        पेश हुई हैं, लेकिन रिपोर्ट नहीं आई है. महासंघ पहले की त
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-desk">
                  <div className="news-desk-top">
                    <div className="news-desk-top-left">
                      <img src={profile} alt="" />
                    </div>
                    <div className="news-desk-top-right">
                      <h1>
                        इस मामले में ओवरसाइट कमेटी ने तीन बातें पाईं. यौन
                        उत्पीडन की शिकायतों पर समाधान के लिए उचित फ़ोरम और
                      </h1>
                      <div className="news-desk-author">
                        <h5>V1sh@l Singh </h5>
                        <p>19/03/2023 - 10:48</p>
                      </div>
                      <p>
                        रियो ओलंपिक की कांस्य पदक विजेता साक्षी मलिक ने कहा,
                        ‘‘हम जंतर-मंतर से नहीं हटेंगे. यह लड़ाई नहीं रुकेगी.’’
                        उन्होंने कहा,‘‘ लड़कियां (महिला पहलवान) समिति के सामने
                        पेश हुई हैं, लेकिन रिपोर्ट नहीं आई है. महासंघ पहले की त
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* <div className="news-desk-bottom">
              <div className="news-desk-bottom-add"></div>
            </div> */}
          </div>
          <div className="home-news-grid">
            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  इस मामले में ओवरसाइट कमेटी ने तीन बातें पाईं. यौन उत्पीडन की
                  शिकायतों पर समाधान के लिए उचित फ़ोरम और
                </h2>
              </div>
            </div>
            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  इस मामले में ओवरसाइट कमेटी ने तीन बातें पाईं. यौन उत्पीडन की
                  शिकायतों पर समाधान के लिए उचित फ़ोरम और
                </h2>
              </div>
            </div>
            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  इस मामले में ओवरसाइट कमेटी ने तीन बातें पाईं. यौन उत्पीडन की
                  शिकायतों पर समाधान के लिए उचित फ़ोरम और
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-news-shorts">
          <div className="container">
            <div className="news-and-videos-shorts">
              <div className="parlimentry-news">
                <h1>
                  {" "}
                  <span className="top-line"></span>Parliamentary Shorts
                </h1>
                <button className="view-more-news">View More</button>
              </div>
              <div className="shorts-height">
                <Slider {...settingsFirst}>
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />

                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>

                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />

                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />

                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />

                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />
                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />
                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />
                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
                      <div className="time-play">
                        <button className="btn-time">10:30</button>{" "}
                        <span>
                          <BsPlay />{" "}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="breaking-news-shorts">
                    <img src={profile} alt="" />
                    <div className="breaking-news-shorts-content">
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <div className="news-desk-author">
                        <p>19/03/2023 </p>
                      </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsvideoDesk;
