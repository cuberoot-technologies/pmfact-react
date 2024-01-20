import React from "react";
import ReactStars from "react-rating-stars-component";

const PfBlogRatingCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="pf-blog-rating-bar">
        <p>
          Here you can rate your MP based on their work under the following 5
          parameters
        </p>
        <p>
          आप यहाँ अपने सांसद को उनके कार्य के आधार पर निम्न 5 मापदंडों के
          अंतर्गत रेटिंग दे सकते हैं
        </p>
        <div className="pf-blog-rating-bar-card">
          <div className="pf-blog-rating-bar-star">
            <h6>Contributtion in development in area</h6>
            <p>क्षेत्र के विकास में योगदान</p>

            <div className="pf-blog-rating-bar-star-det">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <p>ज्यादा है / Good</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PfBlogRatingCard;
