import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component';
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import ParliamentBlogProfile from "../pfblogs/ParliamentBlogProfile";
import profile from '../../assets/profile.jpg';
import ParliamentBlogPerformance from "../pfblogs/ParliamentBlogPerformance";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";

const SearchedMp = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;
    return (
        <>
            <div className="mps">
                <HomeFirstAdd />
            </div>
            <div className="profilecontainer">
                <ParliamentBlogProfile />
                <ParliamentBlogPerformance />
            </div>

            <div className="profileoverview">

                <div style={{ padding: `0 ${chevronWidth}px` }} className="carousel-box">
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={2}
                        gutter={20}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        <Link to="/">
                            {" "}
                            <h1>MP's Home</h1>
                        </Link>
                        <Link to="/">
                            {" "}
                            <h1>Public Rating</h1>
                        </Link>
                        <Link to="/">
                            {" "}
                            <h1>Constituency Performance</h1>
                        </Link>
                        <Link to="/">
                            {" "}
                            <h1>Parliament Performance</h1>
                        </Link>
                        <Link to="/">
                            {" "}
                            <h1>News & Video</h1>
                        </Link>
                        <Link to="/">
                            {" "}
                            <h1>MP's Profile</h1>
                        </Link>
                    </ItemsCarousel>
                </div>
                <div className="performancebox" >
                    <div className="performancecontainer" style={{marginBottom:'1.5rem'}}>
                        <div className="imagecontainer">
                            <img src={profile} alt="" />
                        </div>
                        <div className="description">
                            <h3>Neeraj Mandola houdheer Mondola</h3>
                            <h6>Samajwadi Party <br />Azamgarh <br /> Uttar Pradesh</h6>
                        </div>
                    </div>
                    <div className="ratingcontainer">
                        <h2> Current Rating</h2>
                        <div className="ratings-searched-mp">
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
                  <div className="rating-no-searched-mp">
                    <p>4.8</p>
                  </div>
                   </div>
                  <p>Performance: <b>Satisfactory</b></p>
                    </div>
                </div>

                
            </div>

        </>
    );
};

export default SearchedMp;
