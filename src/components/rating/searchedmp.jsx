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
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
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

            <div className="profileoverview ">
                <div style={{ position: 'relative', top: '20px', padding: `0 ${chevronWidth}px` }} className="carousel-box">
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
                    <div className="performancecontainer" style={{ marginBottom: '1.5rem' }}>
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
                                size={28}
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
                <div className="reviewcontainer">
                    <div className="questionheadings">
                        <p ><b>Here you can rate your MP based on their work under the following 5 parameters</b></p>
                        <p style={{ fontSize: '10px' }}>यहां आप निम्नलिखित 5 मापदंडों के तहत अपने सांसद को उनके काम के आधार पर रेटिंग दे सकते हैं</p>
                    </div>
                    <div className="questionboxes mt-4">
                        <div className="questionbox">
                            <div className="textcontainer">
                                <h4 style={{ fontSize: '20px' }}>Contribution in development of Area</h4>
                                <h6 style={{ fontSize: '13px' }}>क्षेत्र के विकास में योगदान</h6>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="questionbox">
                            <div className="textcontainer">
                                <h4 style={{ fontSize: '20px' }}>How is the image among the public</h4>
                                <h6 style={{ fontSize: '13px' }}>जनता के बीच छवि कैसी है</h6>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="questionbox">
                            <div className="textcontainer">
                                <h4 style={{ fontSize: '20px' }}>To deal with public problems</h4>
                                <h6 style={{ fontSize: '13px' }}>जनता की समस्याओं से निपटने के लिए</h6>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="questionbox">
                            <div className="textcontainer">
                                <h4 style={{ fontSize: '20px' }}>Seriousness towards local issues</h4>
                                <h6 style={{ fontSize: '13px' }}>स्थानीय मुद्दों के प्रति गंभीरता</h6>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="questionbox">
                            <div className="textcontainer">
                                <h4 style={{ fontSize: '20px' }}>Raising impottant issues in parliament</h4>
                                <h6 style={{ fontSize: '13px' }}>संसद में महत्वपूर्ण मुद्दे उठाना</h6>
                            </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={40}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <div className="reviewerdetails">
                        <h2>Please fill out your details</h2>
                        <div className="formcontainer">
                        <div style={{ display: 'flex',alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={selectedGender === 'male'}
                                    onChange={handleGenderChange}
                                />
                                Male
                            </label>
                            <label  style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={selectedGender === 'female'}
                                    onChange={handleGenderChange}
                                />
                                Female
                            </label>
                        </div>
                        <form action="">
                <div className="form-box">
                  <input type="text" placeholder="Type Name" />
                  <input type="email" placeholder="Email" />
                  <input type="number" placeholder="Mobile No." />
                  <input
                    type="text"
                    placeholder="Select Age Category"
                  />

                  <input type="text" placeholder="Enter City/ District Name" />
                </div>
                <div className="form-btn mb-4">
                  <button className="submit-btn">Submit</button>
                </div>
              </form>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
};

export default SearchedMp;
