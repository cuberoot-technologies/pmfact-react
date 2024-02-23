import React from "react";
import Images from "../../../assets/Images.jpeg"


const Readalso = () => {

    return (
        <>

            <div className="readalso">
                <h5 className="layout-heading" style={{marginBlock:'0', paddingTop:'0'}}>Read Also</h5>
                <div className="readalsobox">
                    <div className="single-page-read-also-image-box">
                        <img src={Images} alt="" />
                    </div>
                    <div className="read-also-text-box">
                        <p className="redheading">भारत जोड़ो पर राहुल</p>
                        <h3 className="readalso-heading" style={{ paddingTop: '0', marginBottom: '0' }}>
                        सोनिया गांधी ने 2004 में पहली बार रायबरेली से लड़ा चुनाव
                        </h3>
                        <span className="date">Read More</span>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Readalso;