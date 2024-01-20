import React from 'react';
import profile from '../../assets/profile.jpg'

const UpdateNewspopUp = () => {
  return (
    <>
      <div className="update-news-popup">
        <div className="update-news-popup-top">
          <div className="ratepop-close">
            <p>x</p>
          </div>
          <div className="update-news-popup-middle">
            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid
                  jump in cases
                </h2>
                <span>January 10,2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="update-news-popup-bottom">
          <button className='view-more-full'>View More</button>
        </div>

      </div>
    </>
  )
}

export default UpdateNewspopUp
