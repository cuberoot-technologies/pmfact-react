import React from "react";
import { GrFormNext } from "react-icons/gr";
import Slider from "react-slick";

const FilterPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 8.3,
          slidesToScroll: 1.02,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="filter-page">
        <div className="container">
          <form>
            <div className="filter-form">
              <div className="filter-form-top">
                <h1>
                  Select Year <GrFormNext />
                </h1>
                <div className="filter-form-top-checkbox">
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 1st year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 2nd year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 3rd year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 4th year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 5th year</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-form">
              <div className="filter-form-top">
                <h1>
                  Select Session <GrFormNext />
                </h1>
                <div className="filter-form-top-checkbox">
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 1st year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 2nd year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 3rd year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 4th year</label>
                  </div>
                  <div className="chbx">
                    <input type="checkbox" />
                    <label for=""> 5th year</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-form">
              <div className="filter-form-top">
                <h1>
                  Select Year <GrFormNext />
                </h1>
                <Slider {...settings}>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                  <div>
                    <div className="date-time">
                      <p>Tues</p>
                      <h5>25</h5>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="done-btn">
              <button className="done">Done</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
