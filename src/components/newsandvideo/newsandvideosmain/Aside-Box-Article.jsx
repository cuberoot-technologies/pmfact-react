import React from "react";
import Images from "../../../assets/Images.jpeg"

const AsideBoxArticle = () => {

    return (
        <>

            <div className="aside-box-article" style={{marginBlockStart:'1.7rem'}}>
                
                <div class="news-block view2">
                    <img src={Images} alt="" />
                    <h3 class="aside-heading">अब प्रियंका गांधी को इस सीट से किया जा सकता है लॉन्च इस सीट सकता है लॉन्च इस सीट </h3>
                </div>
                <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>
                <div class="news-block view2">
                    <img src={Images} alt="" />
                    <h3 class="aside-heading">अब प्रियंका गांधी को इस सीट से किया जा सकता है लॉन्च इस सीट सकता है लॉन्च इस सीट </h3>
                </div>
                <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>
                <div class="news-block view2">
                    <img src={Images} alt="" />
                    <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known They Had Known</h3>
                </div>
                <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>
                <div class="news-block view2">
                    <img src={Images} alt="" />
                    <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known They Had Known</h3>
                </div>
                <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>
            </div>

        </>

    );
};

export default AsideBoxArticle;