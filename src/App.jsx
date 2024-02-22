import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import HomeMpPerformance from "./components/homempperformance/HomeMpPerformance";
import IndividualBottomFull from "./components/homempperformance/individuals/IndividualsBottomFull";
import IndividualTopFull from "./components/homempperformance/individuals/IndividualTopFull";
import NewsAndVideoDetails from "./components/newsandvideo/NewsAndVideoDetails";
import NewsAndVideos from "./components/newsandvideo/NewsAndVideos";
import NewsVideoBar from "./components/newsandvideo/NewsVideoBar";
import NewsAndVideosCategory from "./components/newsandvideo/NewsAndVideoCategory";
import NewsAndVideosSingle from "./components/newsandvideo/NewsandVideoSingle";
import OurMps from "./components/ourmps/OurMps";
import ParliamentPerformance from "./components/parliament/ParliamentPerformance";
import InTheWell from "./components/performance/InTheWell";
import OurExpertAbout from "./components/pfexperts/OurExpertAbout";
import OurExpertAboutDetails from "./components/pfexperts/OurExpertAboutDetails";
import OurExperts from "./components/pfexperts/OurExperts";
import PublicVoice from "./components/publicvoice/PublicVoice";
import RateYourMp from "./components/rating/RateYourMp";
import Textbar from "./components/Textbar";
import Topbar from "./components/Topbar";
import SearchedMp from "./components/rating/searchedmp";
import WishYourMp from "./components/wishyourmp/WishYourMp";
import BottomBar from "./components/float/BottomBar";
import RatePopup from "./components/float/RatePopup";
import Uparrow from "./components/float/Uparrow";
import UpdateNewspopUp from "./components/float/UpdateNewspopUp";
import AllTopmemberBill from "./components/parliament/memberbill/AllTopmemberBill";
import SearchRateMp from "./components/rating/SearchRateMp";
import RateYourMpPage from "./components/rating/RateYourMpPage";
import ParliamentBlog from "./components/pfblogs/ParliamentBlog";
import FilterPage from "./components/filter/FilterPage";
import MpSelected from "./components/mpselected/MpSelected";
import ThankYou from "./components/thankyou/ThankYou";
import Footer from "./Footer";
import SliderTextbar from "./components/textbarslider";
import NewsAndVideosMain from "./components/newsandvideo/NewsandVideosmain";
import NewsAndVideoCategories from "./components/newsandvideo/NewsAndVideosMainCategory";
import NewsAndVideoSinglePageBlog from "./components/newsandvideo/NewsandVideosSinglePageBlog";

// import appFooter from "./components/appfooter";

const App = () => {
  return (
    <>
      <div className="headerwrap">
        <Topbar />
        <Textbar />
      </div>
      <SliderTextbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/parliament-performance"
          element={<ParliamentPerformance />}
        />
        <Route path="/home-mp-performance" element={<HomeMpPerformance />} />
        <Route
          path="/individuals-attendence-top"
          element={<IndividualTopFull />}
        />
        <Route
          path="/individuals-attendence-bottom"
          element={<IndividualBottomFull />}
        />
        {/* Parliament blog *********************** */}
        <Route path="/parliament-blog" element={<ParliamentBlog />} />

        {/* all Topmember bill ################## */}
        <Route path="/member-bill" element={<AllTopmemberBill />} />

        {/* Our Mps********** */}
        <Route path="/our-mps" element={<OurMps />} />

        {/*News and video********** */}
        <Route path="/news-and-videos-home" element={<NewsAndVideos />} />
        <Route path="/news-and-videos-category" element={<NewsAndVideosCategory />} />
        <Route path="/news-and-videos" element={<NewsVideoBar />} />
        <Route path="/news-and-videos-page" element={<NewsAndVideosSingle />} />
        <Route path="/news-and-videos-home-main" element={<NewsAndVideosMain />} />
        <Route path="/news-and-videos-home-main-category" element={<NewsAndVideoCategories />} />
        <Route path="/news-and-videos-home-main-page" element={<NewsAndVideoSinglePageBlog />} />
        <Route
          path="/news-and-videos-details"
          element={<NewsAndVideoDetails />}
        />
        {/* our team *********** */}
        <Route path="/our-expert" element={<OurExperts />} />
        <Route path="/our-expert-about" element={<OurExpertAbout />} />
        <Route
          path="/our-expert-about-details"
          element={<OurExpertAboutDetails />}
        />

        {/*wish mp birthday********************  */}
        <Route path="/wish-your-mp" element={<WishYourMp />} />

        <Route path="/in-the-well" element={<InTheWell />} />

        {/* rate your mp ***************************** */}

        <Route path="/rate-your-mp" element={<RateYourMpPage />} />
        <Route path="/rate-your-mp-list" element={<RateYourMp />} />

        <Route path="/search-our-mps" element={<SearchRateMp />} />

        {/* public voice ******************************/}
        <Route path="/public-voice" element={<PublicVoice />} />

        {/* filter******************** */}

        <Route path="/filter" element={<FilterPage />} />

        {/* select mp*************** */}
        <Route path="/select-mp" element={<MpSelected />} />

        {/* thankyou page ###^^^^^^&&&&&&&&&&&&&&&&&&&&&&&&&&&************ */}

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/searched-mp" element={<SearchedMp />} />
      </Routes>
      {/* <appFooter /> */}
      <Footer />

    </>
  );
};

export default App;
