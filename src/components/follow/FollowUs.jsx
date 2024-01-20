import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const FollowUs = () => {
  return (
    <>
      <div className="container">
        <div className="follow">
          <div className="follow-left">
            <h1>Follow us:</h1>
          </div>
          <div className="follow-right">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsYoutube />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
