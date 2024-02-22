import React, { useState } from "react";
import Images from "../../../assets/Images.jpeg";


const ExtraNews = () => {

    return (
        <>

            <div className="middle-new-box">
                <div className="middleboxes">
                    <div className="middlebox">
                        <div className="middleboximage">
                            <img src={Images} alt="" />
                        </div>
                        <div className="category-label">Video</div>
                        <div className="middleboxtext">
                            <h3 className="extranews-heading" >कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली</h3>
                            <p className="date-extranews">Read More</p>
                        </div>
                    </div>
                    <div className="middlebox">
                        <div className="middleboximage">
                            <img src={Images} alt="" />
                        </div>
                        <div className="category-label">Video</div>
                        <div className="middleboxtext">
                            <h3 className="extranews-heading" >कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली</h3>
                            <p className="date-extranews">Read More</p>
                        </div>
                    </div>
                    <div className="middlebox">
                        <div className="middleboximage">
                            <img src={Images} alt="" />
                        </div>
                        <div className="category-label">Video</div>
                        <div className="middleboxtext">
                            <h3 className="extranews-heading" >Door slmas at the person in europe in geneva in europe in geneva</h3>
                            <p className="date-extranews">Read More</p>
                        </div>
                    </div>
                    <div className="middlebox">
                        <div className="middleboximage">
                            <img src={Images} alt="" />
                        </div>
                        <div className="category-label">Video</div>
                        <div className="middleboxtext">
                            <h3 className="extranews-heading" >Door slmas at the person in europe in geneva in europe in geneva</h3>
                            <p className="date-extranews">Read More</p>
                        </div>
                    </div>
                    <div className="middlebox">
                        <div className="middleboximage">
                            <img src={Images} alt="" />
                        </div>
                        <div className="category-label">Video</div>
                        <div className="middleboxtext">
                            <h3 className="extranews-heading" >Door slmas at the person in europe in geneva switzerland</h3>
                            <p className="date-extranews">Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ExtraNews;