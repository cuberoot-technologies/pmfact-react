import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import profile from '../../assets/profile.jpg';
import RateYourMpPage from './RateYourMpPage';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const SearchRateMp = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const stateList = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman & Diu',
    'Delhi',
    'Jammu & Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];

  const handleSelectState = (e) => {
    setSelectedState(e.target.value);
    setName('');
    setSearchBy('');
    setConstituency('');
    setPlace('');
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
    setConstituency('');
    setPlace('');
  };

  const handleConstituencyChange = (e) => {
    setConstituency(e.target.value);
    setPlace('');
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

    const [searchPerformed, setSearchPerformed] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [name, setName] = useState('');
    const [searchBy, setSearchBy] = useState('');
    const [constituency, setConstituency] = useState('');
    const [place, setPlace] = useState('');
  
    // ... (other functions remain the same)
  
    const handleSearch = () => {
      // Perform your search logic here
      // For now, just set searchPerformed to true
      setSearchPerformed(true);
    };
  
    const isSearchButtonEnabled = !!name || !!selectedState || !!searchBy || !!constituency || !!place;

  return (
    <>
      <div className="mps">
        <div className="container">
          <div className="our-mps mt-3">
            <h1>Search Your MPs</h1>
            <div className="ourmps-form">
              <form onSubmit={(e) => {
    e.preventDefault(); 
    handleSearch();
}}>
                <div className="form-top">
                  <input type="text" placeholder="Type Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <p style={{ textAlign: 'center', fontSize: '18px', margin: '0 1rem' }}>or</p>
                  <div>
                    <select
                      value={selectedState}
                      onChange={handleSelectState}
                      style={{ appearance: 'menulist' }}
                      className="selectbox"
                    >
                      <option value="" disabled>Select State or UT</option>
                      {stateList.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <p style={{fontSize:'18px', textAlign:'center', fontWeight:'bold'}}>or</p> */}
                <div className="form-bottom mt-2">
                  <input
                    type="text"
                    placeholder="Search By"
                    value={searchBy}
                    onChange={handleSearchByChange}
                    disabled={!name && !selectedState}
                  />
                  <input
                    type="text"
                    placeholder="Select Constituency or District"
                    value={constituency}
                    onChange={handleConstituencyChange}
                    disabled={!name && !selectedState && !searchBy}
                  />
                  <input
                    type="text"
                    placeholder="Select Place"
                    value={place}
                    onChange={handlePlaceChange}
                    disabled={!name && !selectedState && !searchBy && !constituency}
                  />
                </div>
                <div className="form-btn">
                <button className="submit-btn" onClick={handleSearch} disabled={!isSearchButtonEnabled}>
   Search
</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {searchPerformed && (
      <div className="result-mps-card-bg">
        <div className="container">
          <div className="result-mps-card">
            <h1>Select MP</h1>
            <div className="public-rating-card">
              <div className="badges">4.3</div>
              <div className="public-rating-card-left">
                <img src={profile} alt="" />
              </div>
              <div className="public-rating-card-middle">
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  <p>
                    BJP <span>Delhi</span>
                  </p>
                </div>
              </div>
              <div className="public-rating-card-right">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rate-now">
                <Link to="/searched-mp" className="view-rate-btn">
            Rate Now
          </Link>
                </div>
              </div>
              <div className="public-rating-card-right-dot">
                <BsThreeDotsVertical />
              </div>
            </div>
            {/* <div className="public-rating-card">
              <div className="badges">4.3</div>
              <div className="public-rating-card-left">
                <img src={profile} alt="" />
              </div>
              <div className="public-rating-card-middle">
                <div className="mp-performance-card-body">
                  <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  <p>
                    BJP <span>Delhi</span>
                  </p>
                </div>
              </div>
              <div className="public-rating-card-right">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="rate-now">
                  <Link to="/searched-mp" className="view-rate-btn">
                    Rate Now
                  </Link>
                </div>
              </div>
              <div className="public-rating-card-right-dot">
                <BsThreeDotsVertical />
              </div>
            </div>*/}
          </div> 
          {/* <div className="result-mps-card">
            <h1>Select MP</h1>
            <div className="result-mps-card-wrapper">
              <div className="result-mps-card-wrapper-img">
                <img src={profile} alt="" />
              </div>
              <div className="result-mps-card-wrapper-content">
                <h6>Neeraj Ram Mandola houdheer Mandola</h6>
                <p>
                  Samajwadi Panty <br />
                  Azamgarh <br />
                  Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="current-rating">
              <h2>Current Rating</h2>
              <div className="current-rating-wrapper">
                <div className="current-rating-wrapper-rating">
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
                  <p>
                    Performance: <span>Satisfactory</span>
                  </p>
                </div>
                <div className="current-rating-wrapper-btn">
                  <button className="rating-display">4.98</button>
                </div>
              </div>
              <div className="current-rating-wrapper-display">
                <button className="rating-display">Rate Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      )}
      <div className="rate-mp-page">
        <RateYourMpPage />
      </div>
    </>
  );
};

export default SearchRateMp;
