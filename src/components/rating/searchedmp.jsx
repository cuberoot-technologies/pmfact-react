import Slider from "react-slick";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import ParliamentBlog from "../pfblogs/ParliamentBlog";
import ParliamentBlogProfile from "../pfblogs/ParliamentBlogProfile";
import ParliamentBlogPerformance from "../pfblogs/ParliamentBlogPerformance";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";
import kharch from '../../assets/kharch.png'

const SearchedMp = () => {
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

            <div style={{ padding: `0 ${chevronWidth}px` }} className="carousel-box">
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={20}
                // leftChevron={<button>{''}</button>}
                // rightChevron={<button>{''}</button>}
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
      

    </>
  );
};

export default SearchedMp;
