import React, { useState, useEffect } from "react";
import Toplayout1 from "./newsandvideosmain/Topsliderlayout";
import MainBoxArticle from "./newsandvideosmain/Main-big-news";
import MiddleBoxArticle from "./newsandvideosmain/Middle-box-article";
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import ExtraNews from "./newsandvideosmain/extranews";
import NewsBoxArticle from "./newsandvideosmain/NewsBoxArticle";

const NewsAndVideosMain = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch('https://parliamentaryfact.com/wp-json/wp/v2/categories')
      .then(response => response.json())
      .then(response => {
        const categoriesData = response.map(category => ({
          name: category.name,
          slug: category.slug
        }));
        setCategories(categoriesData);
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div className="main-news-and-videos-coverage">
        <div className="pillarads right">
          <img src="https://placehold.co/160x600" alt="" />
        </div>
        <div style={{ position: "relative" }}>
          <div className="content">
            <Toplayout1 />

            <div className="layout2">
              <div className="aside-box-container mobile">
                <h3 className="layout-heading">{categories.length > 0 && categories[0].name}</h3>
                <MainBoxArticle />
              </div>
              <div className="aside-box-container mobile">
                <h3 className="layout-heading">{categories.length > 1 && categories[1].name}</h3>
                <MiddleBoxArticle />
              </div>
              <div className="aside-box-container">
                <h3 className="layout-heading">{categories.length > 2 && categories[2].name}</h3>
                <AsideBoxArticle />
              </div>
            </div>
          </div>
        </div>
        <div className="pillarads left">
          <img src="https://placehold.co/160x600" alt="" />
        </div>
      </div>

      <div className="adbox">
        <img src="https://placehold.co/700x80" alt="" />
      </div>

      <div className="layout3" style={{ marginTop: '2rem' }}>
        <div className="layout-3background">
          <div className="layout-3content">
            <h3 className="layout-heading" style={{ marginInline: 'var(--gutter-size)' }}>{categories.length > 3 && categories[3].name}</h3>
            <ExtraNews />
          </div>
        </div>
      </div>

      <div className="main-news-and-videos-coverage">
        <div style={{ position: "relative" }}>
          <div className="content">
            <div className="layout2-pre shorts">
              <div className="layout2 shorts">
                <div className="aside-box-container mobile">
                  <h3 className="layout-heading">{categories.length > 4 && categories[4].name}</h3>
                  <MainBoxArticle />
                </div>
                <div className="aside-box-container mobile">
                  <h3 className="layout-heading">{categories.length > 5 && categories[5].name}</h3>
                  <MiddleBoxArticle />
                </div>
                <div className="aside-ad-contentbox">
                  <div className="aside-content">
                    <div className="advertisement square-ad">
                      <img src="https://placehold.co/300x250" alt="" />
                    </div>
                  </div>
                  <h3 className="layout-heading" style={{paddingBlockStart:'0', marginBlockStart:'10px'}}>{categories.length > 6 && categories[6].name}</h3>
                  <AsideBoxArticle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="adbox">
        <img src="https://placehold.co/700x80" alt="" />
      </div>
      <div className="main-news-and-videos-coverage">
        <div style={{ position: "relative" }}>
          <div className="content">
            <div className="layout2-pre">
              <div className="layout2">
                <div className="aside-box-container mobile">
                  <h3 className="layout-heading">{categories.length > 7 && categories[7].name}</h3>
                  <NewsBoxArticle />
                </div>
                <div className="aside-box-container">
                  <h3 className="layout-heading">{categories.length > 8 && categories[8].name}</h3>
                  <AsideBoxArticle />
                </div>
                <div className="aside-box-container">
                  <h3 className="layout-heading">{categories.length > 9 && categories[9].name}</h3>
                  <AsideBoxArticle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndVideosMain;
