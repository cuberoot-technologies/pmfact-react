import React from "react";
import profile from "../../assets/profile.jpg";
import { MdGroup } from "react-icons/md";
import { BiDislike, BiLike } from "react-icons/bi";
import { BsChatLeft, BsShareFill } from "react-icons/bs";

const MostRequested = () => {

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <>
      <div className="most-requested">
        <h2>Most Requested</h2>
        <span>Campaign</span>
      </div>
      <div className="request-grid">

      <div className="most-requested-wrapper">
        <div className="most-requested-wrapper-card">
          <div className="most-requested-wrapper-card-left">
            <div className="most-requested-wrapper-card-left-img">
              <img src={profile} alt="" />
            </div>
            <div className="most-requested-wrapper-card-left-name">
              <h6>Rahul Gupta Neeraj Gupta Neeraj</h6>
              <p>Samajwadi Panty Azamgarh | UP</p>
            </div>
          </div>
          <div className="most-requested-wrapper-card-right">
            <p><MdGroup/> 1000</p>
            <button className="view-more-news" onClick={myFunction}>View Requested</button>
          </div>
        </div>
        <div className="card-drop-style" id="myDIV">
          <div className="dropdown-most-requested">
            <div className="dropdown-most-requested-card">
              <div className="dropdown-most-requested-card-top">
                <div className="dropdown-most-requested-card-top-img">
                  <img src={profile} alt="" />
                </div>
                <div className="dropdown-most-requested-card-top-content">
                  <h6>
                    infinite loop loading animation effect using html css and
                    svg. svg loading animation effect tutorial.
                  </h6>
                  <p>SURAJ RAJ SINGH</p>
                </div>
              </div>
              <div className="like-comment-views">
                <p className="like"><BiLike/> 1000</p>
                <p className="comment"><BsChatLeft/> 1000</p>
                <p className="views"><MdGroup/> 1000</p>
              </div>
              <div className="share-btn">
                <div className="share"><BsShareFill/></div>
              </div>
              <div className="support-karen">
                <div className="support-karen-img">
                  <img src={profile} alt="" />
                </div>
                <div className="support-karen-button">
                  <button className="support">Support Karen</button>{" "}
                </div>
              </div>
              <p className="reply">Reply</p>
            </div>

            <div className="support-karen-wrapper">
              <div className="support-karen-wrapper-left"></div>
              <div className="support-karen-wrapper-right-wrapper">
                <div className="support-karen-wrapper-right">
                  <div className="support-karen-wrapper-right-img">
                    <img src={profile} alt="" />
                  </div>
                  <div className="support-karen-wrapper-right-content">
                    <h6>
                      infinite loop loading animation effect using html css and
                      svg. svg loading animation effect tutorial.
                    </h6>
                  </div>
                </div>
                <p>SURAJ RAJ SINGH</p>

                <div className="like-dislike">
                  <p className="like"><BiLike/> 1000</p>
                  <p className="comment"><BiDislike/> 1000</p>
                </div>
              </div>
            </div>
          </div>
        <div className="dropdown-most-requested-card">
          <div className="dropdown-most-requested-card-top">
            <div className="dropdown-most-requested-card-top-img">
              <img src={profile} alt="" />
            </div>
            <div className="dropdown-most-requested-card-top-content">
              <h6>
                infinite loop loading animation effect using html css and svg.
                svg loading animation effect tutorial.
              </h6>
              <p>SURAJ RAJ SINGH</p>
            </div>
          </div>
          <div className="like-comment-views">
            <p className="like"><BiLike/> 1000</p>
            <p className="comment"><BsChatLeft/> 1000</p>
            <p className="views"><MdGroup/> 1000</p>
          </div>
          <div className="share-btn">
            <div className="share"><BsShareFill/></div>
          </div>
          <div className="support-karen">
            <div className="support-karen-img">
              <img src={profile} alt="" />
            </div>
            <div className="support-karen-button">
              <button className="support">Support Karen</button>{" "}
            </div>
          </div>
          <p className="reply">Reply</p>
        </div>
        </div>

      </div>
      <div className="most-requested-wrapper">
        <div className="most-requested-wrapper-card">
          <div className="most-requested-wrapper-card-left">
            <div className="most-requested-wrapper-card-left-img">
              <img src={profile} alt="" />
            </div>
            <div className="most-requested-wrapper-card-left-name">
              <h6>Rahul Gupta Neeraj Gupta Neeraj</h6>
              <p>Samajwadi Panty Azamgarh | UP</p>
            </div>
          </div>
          <div className="most-requested-wrapper-card-right">
            <p><MdGroup/> 1000</p>
            <button className="view-more-news" onClick={myFunction}>View Requested</button>
          </div>
        </div>
        <div className="card-drop-style" id="myDIV">
          <div className="dropdown-most-requested">
            <div className="dropdown-most-requested-card">
              <div className="dropdown-most-requested-card-top">
                <div className="dropdown-most-requested-card-top-img">
                  <img src={profile} alt="" />
                </div>
                <div className="dropdown-most-requested-card-top-content">
                  <h6>
                    infinite loop loading animation effect using html css and
                    svg. svg loading animation effect tutorial.
                  </h6>
                  <p>SURAJ RAJ SINGH</p>
                </div>
              </div>
              <div className="like-comment-views">
                <p className="like"><BiLike/> 1000</p>
                <p className="comment"><BsChatLeft/> 1000</p>
                <p className="views"><MdGroup/> 1000</p>
              </div>
              <div className="share-btn">
                <div className="share"><BsShareFill/></div>
              </div>
              <div className="support-karen">
                <div className="support-karen-img">
                  <img src={profile} alt="" />
                </div>
                <div className="support-karen-button">
                  <button className="support">Support Karen</button>{" "}
                </div>
              </div>
              <p className="reply">Reply</p>
            </div>

            <div className="support-karen-wrapper">
              <div className="support-karen-wrapper-left"></div>
              <div className="support-karen-wrapper-right-wrapper">
                <div className="support-karen-wrapper-right">
                  <div className="support-karen-wrapper-right-img">
                    <img src={profile} alt="" />
                  </div>
                  <div className="support-karen-wrapper-right-content">
                    <h6>
                      infinite loop loading animation effect using html css and
                      svg. svg loading animation effect tutorial.
                    </h6>
                  </div>
                </div>
                <p>SURAJ RAJ SINGH</p>

                <div className="like-dislike">
                  <p className="like"><BiLike/> 1000</p>
                  <p className="comment"><BiDislike/> 1000</p>
                </div>
              </div>
            </div>
          </div>
        <div className="dropdown-most-requested-card">
          <div className="dropdown-most-requested-card-top">
            <div className="dropdown-most-requested-card-top-img">
              <img src={profile} alt="" />
            </div>
            <div className="dropdown-most-requested-card-top-content">
              <h6>
                infinite loop loading animation effect using html css and svg.
                svg loading animation effect tutorial.
              </h6>
              <p>SURAJ RAJ SINGH</p>
            </div>
          </div>
          <div className="like-comment-views">
            <p className="like"><BiLike/> 1000</p>
            <p className="comment"><BsChatLeft/> 1000</p>
            <p className="views"><MdGroup/> 1000</p>
          </div>
          <div className="share-btn">
            <div className="share"><BsShareFill/></div>
          </div>
          <div className="support-karen">
            <div className="support-karen-img">
              <img src={profile} alt="" />
            </div>
            <div className="support-karen-button">
              <button className="support">Support Karen</button>{" "}
            </div>
          </div>
          <p className="reply">Reply</p>
        </div>
        </div>

      </div>
      <div className="most-requested-wrapper">
        <div className="most-requested-wrapper-card">
          <div className="most-requested-wrapper-card-left">
            <div className="most-requested-wrapper-card-left-img">
              <img src={profile} alt="" />
            </div>
            <div className="most-requested-wrapper-card-left-name">
              <h6>Rahul Gupta Neeraj Gupta Neeraj</h6>
              <p>Samajwadi Panty Azamgarh | UP</p>
            </div>
          </div>
          <div className="most-requested-wrapper-card-right">
            <p><MdGroup/> 1000</p>
            <button className="view-more-news" onClick={myFunction}>View Requested</button>
          </div>
        </div>
        <div className="card-drop-style" id="myDIV">
          <div className="dropdown-most-requested">
            <div className="dropdown-most-requested-card">
              <div className="dropdown-most-requested-card-top">
                <div className="dropdown-most-requested-card-top-img">
                  <img src={profile} alt="" />
                </div>
                <div className="dropdown-most-requested-card-top-content">
                  <h6>
                    infinite loop loading animation effect using html css and
                    svg. svg loading animation effect tutorial.
                  </h6>
                  <p>SURAJ RAJ SINGH</p>
                </div>
              </div>
              <div className="like-comment-views">
                <p className="like"><BiLike/> 1000</p>
                <p className="comment"><BsChatLeft/> 1000</p>
                <p className="views"><MdGroup/> 1000</p>
              </div>
              <div className="share-btn">
                <div className="share"><BsShareFill/></div>
              </div>
              <div className="support-karen">
                <div className="support-karen-img">
                  <img src={profile} alt="" />
                </div>
                <div className="support-karen-button">
                  <button className="support">Support Karen</button>{" "}
                </div>
              </div>
              <p className="reply">Reply</p>
            </div>

            <div className="support-karen-wrapper">
              <div className="support-karen-wrapper-left"></div>
              <div className="support-karen-wrapper-right-wrapper">
                <div className="support-karen-wrapper-right">
                  <div className="support-karen-wrapper-right-img">
                    <img src={profile} alt="" />
                  </div>
                  <div className="support-karen-wrapper-right-content">
                    <h6>
                      infinite loop loading animation effect using html css and
                      svg. svg loading animation effect tutorial.
                    </h6>
                  </div>
                </div>
                <p>SURAJ RAJ SINGH</p>

                <div className="like-dislike">
                  <p className="like"><BiLike/> 1000</p>
                  <p className="comment"><BiDislike/> 1000</p>
                </div>
              </div>
            </div>
          </div>
        <div className="dropdown-most-requested-card">
          <div className="dropdown-most-requested-card-top">
            <div className="dropdown-most-requested-card-top-img">
              <img src={profile} alt="" />
            </div>
            <div className="dropdown-most-requested-card-top-content">
              <h6>
                infinite loop loading animation effect using html css and svg.
                svg loading animation effect tutorial.
              </h6>
              <p>SURAJ RAJ SINGH</p>
            </div>
          </div>
          <div className="like-comment-views">
            <p className="like"><BiLike/> 1000</p>
            <p className="comment"><BsChatLeft/> 1000</p>
            <p className="views"><MdGroup/> 1000</p>
          </div>
          <div className="share-btn">
            <div className="share"><BsShareFill/></div>
          </div>
          <div className="support-karen">
            <div className="support-karen-img">
              <img src={profile} alt="" />
            </div>
            <div className="support-karen-button">
              <button className="support">Support Karen</button>{" "}
            </div>
          </div>
          <p className="reply">Reply</p>
        </div>
        </div>

      </div>
      <div className="most-requested-wrapper">
        <div className="most-requested-wrapper-card">
          <div className="most-requested-wrapper-card-left">
            <div className="most-requested-wrapper-card-left-img">
              <img src={profile} alt="" />
            </div>
            <div className="most-requested-wrapper-card-left-name">
              <h6>Rahul Gupta Neeraj Gupta Neeraj</h6>
              <p>Samajwadi Panty Azamgarh | UP</p>
            </div>
          </div>
          <div className="most-requested-wrapper-card-right">
            <p><MdGroup/> 1000</p>
            <button className="view-more-news" onClick={myFunction}>View Requested</button>
          </div>
        </div>
        <div className="card-drop-style" id="myDIV">
          <div className="dropdown-most-requested">
            <div className="dropdown-most-requested-card">
              <div className="dropdown-most-requested-card-top">
                <div className="dropdown-most-requested-card-top-img">
                  <img src={profile} alt="" />
                </div>
                <div className="dropdown-most-requested-card-top-content">
                  <h6>
                    infinite loop loading animation effect using html css and
                    svg. svg loading animation effect tutorial.
                  </h6>
                  <p>SURAJ RAJ SINGH</p>
                </div>
              </div>
              <div className="like-comment-views">
                <p className="like"><BiLike/> 1000</p>
                <p className="comment"><BsChatLeft/> 1000</p>
                <p className="views"><MdGroup/> 1000</p>
              </div>
              <div className="share-btn">
                <div className="share"><BsShareFill/></div>
              </div>
              <div className="support-karen">
                <div className="support-karen-img">
                  <img src={profile} alt="" />
                </div>
                <div className="support-karen-button">
                  <button className="support">Support Karen</button>{" "}
                </div>
              </div>
              <p className="reply">Reply</p>
            </div>

            <div className="support-karen-wrapper">
              <div className="support-karen-wrapper-left"></div>
              <div className="support-karen-wrapper-right-wrapper">
                <div className="support-karen-wrapper-right">
                  <div className="support-karen-wrapper-right-img">
                    <img src={profile} alt="" />
                  </div>
                  <div className="support-karen-wrapper-right-content">
                    <h6>
                      infinite loop loading animation effect using html css and
                      svg. svg loading animation effect tutorial.
                    </h6>
                  </div>
                </div>
                <p>SURAJ RAJ SINGH</p>

                <div className="like-dislike">
                  <p className="like"><BiLike/> 1000</p>
                  <p className="comment"><BiDislike/> 1000</p>
                </div>
              </div>
            </div>
          </div>
        <div className="dropdown-most-requested-card">
          <div className="dropdown-most-requested-card-top">
            <div className="dropdown-most-requested-card-top-img">
              <img src={profile} alt="" />
            </div>
            <div className="dropdown-most-requested-card-top-content">
              <h6>
                infinite loop loading animation effect using html css and svg.
                svg loading animation effect tutorial.
              </h6>
              <p>SURAJ RAJ SINGH</p>
            </div>
          </div>
          <div className="like-comment-views">
            <p className="like"><BiLike/> 1000</p>
            <p className="comment"><BsChatLeft/> 1000</p>
            <p className="views"><MdGroup/> 1000</p>
          </div>
          <div className="share-btn">
            <div className="share"><BsShareFill/></div>
          </div>
          <div className="support-karen">
            <div className="support-karen-img">
              <img src={profile} alt="" />
            </div>
            <div className="support-karen-button">
              <button className="support">Support Karen</button>{" "}
            </div>
          </div>
          <p className="reply">Reply</p>
        </div>
        </div>

      </div></div>
    </>
  );
};

export default MostRequested;
