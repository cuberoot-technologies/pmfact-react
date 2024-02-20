import React from "react";
import Images from "../../../assets/Images.jpeg"


const MainBoxArticle = () => {

    return (
        <>
            <div className="main-box-article">
                <div class="news-block main-big-news">
                    <img src={Images} alt="" />
                    <span class="category-label">Video</span>
                    <h3 class="section-heading" style={{marginBlock:'1rem'}}>Rajya Sabha Election 2024: राजस्थान से निर्विरोध राज्यसभा सांसद चुनी गईं सोनिया गांधी, जानें लिस्ट में और कौन-कौन?</h3>
                    <p class="excerpt">
                    मध्य प्रदेश और गुजरात में भी निर्विरोध चुने गए सांसद...
                    </p>
                </div>
            </div>

        </>

    );
};

export default MainBoxArticle;