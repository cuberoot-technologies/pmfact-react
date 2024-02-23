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
                        <p className="redheading">Rahul on Bharat Jodo Yatra</p>
                        <h3 className="readalso-heading" style={{ paddingTop: '0', marginBottom: '0' }}>
                            Italy Lombardia reports first 2 coronavirus deaths amid jump
                            in cases
                        </h3>
                        <span className="date">Read More</span>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Readalso;