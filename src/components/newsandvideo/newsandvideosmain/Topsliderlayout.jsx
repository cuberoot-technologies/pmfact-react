import React from "react";
import Images from "../../../assets/Images.jpeg"


const Toplayout1 = () => {

    return (
        <>
            <div className="layout1">
                <div className="image-box-layout1">
                <img src={Images} alt="" />
                </div>

                <div className="sliderimagebox">
                <img src="https://placehold.co/200" alt="" />
                </div>
          
                <div className="layout1-content">
                    <div className="article">
                        <h3 className="section-heading"> मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी कोरोनोवायरस मौतों की रिपोर्ट दी</h3>
                        <div className="article-content">
                            <span className="category-label">Video</span>
                            <span className="author">Stephan Romero</span>
                            <span className="date">19/03/2020 - 10:48</span>
                        </div>
                        <p class="excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, incidunt sequi repellat atque rerum
                        </p>
                    </div>
                </div>
                <div className="aside-content">
                    <div class="advertisement square-ad">
                        <img src="https://placehold.co/300x250" alt="" />
                    </div>
                </div>
            </div>

        </>

    );
};

export default Toplayout1;