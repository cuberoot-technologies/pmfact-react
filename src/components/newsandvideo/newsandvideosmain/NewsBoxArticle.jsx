import React from "react";
import Images from "../../../assets/Images.jpeg"


const NewsBoxArticle = () => {

    return (
        <>

<div className="main-box-article newsbox">
                <div class="extranews-block">
                    <img src={Images} alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >Rahul on Bharat Jodo</h6>
                    <h3 class="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली  रायबरेली मानी जाती है रायबरेली </h3>
                    </div>
                </div>
                <div class="extranews-block">
                    <img src={Images} alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >Rahul on Bharat Jodo</h6>
                    <h3 class="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली रायबरेली मानी जाती है रायबरेली </h3>
                    </div>
                </div>
                <div class="extranews-block">
                    <img src={Images}alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >Rahul on Bharat Jodo</h6>
                    <h3 class="extranews-heading">Watch: 10 Days Later: What Italians Wish They Had Known talians Wish They Had Known</h3>
                    </div>
                </div>
                <div class="extranews-block">
                    <img src={Images} alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >Rahul on Bharat Jodo</h6>
                    <h3 class="extranews-heading">Watch: 10 Days Later: What Italians Wish They Had Known talians Wish They Had Known</h3>
                    </div>
                </div>
            </div>


        </>

    );
};

export default NewsBoxArticle;