import React from "react";
import Images from "../../../assets/Images.jpeg"


const Quotes = () => {

    return (
        <>
            <div className="readalso">
                <h5 className="layout-heading">Quotes</h5>
                <div className="quotealsobox">
                    <div className="quotes">
                        <div className="readalsobox">
                            <div className="quote-image-box">
                                <img src={Images} alt="" />
                            </div>
                            <div className="quote-text-box">
                                <h3 className="extranews-heading" style={{ color: '#444' }}>
                                    Neeraj Gupta
                                </h3>
                            </div>
                        </div>
                        <h6 className="extranews-heading">Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases.</h6>
                    </div>

                    <div className="mplinecontainer">
                        <hr className="mpline" />
                    </div>
                    <div className="quotes">
                        <div className="readalsobox">
                            <div className="quote-image-box">
                                <img src={Images} alt="" />
                            </div>
                            <div className="quote-text-box">
                                <h3 className="extranews-heading" style={{ color: '#444' }}>
                                    Neeraj Gupta
                                </h3>
                            </div>
                        </div>
                        <h6 className="extranews-heading">Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases.</h6>
                    </div>
                </div>

            </div>

        </>

    );
};

export default Quotes;