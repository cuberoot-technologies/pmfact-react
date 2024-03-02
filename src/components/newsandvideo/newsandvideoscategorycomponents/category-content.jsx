import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryContent = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, [categoryId]);

  const getAllPosts = (pageSize = 10, page = 1) => {
    let url = `https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&orderby=date&order=desc&per_page=${pageSize}&page=${page}&_embed`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="layout1-category-content">
        {Array.isArray(posts) && posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <Link to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
              <div className="layout1-category-content-box">
                {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] &&
                  <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.slug} className="post-thumbnail" />
                }
                <div className="layout1-category-content-box-headings">
                  <h6 className="redheading">{post.title && post.title.rendered}</h6>
                  <h3 className="category-main-heading">{post.title && post.title.rendered}</h3>
                  <p className="excerpt category" style={{ marginTop: '10px' }}>
                    {post.excerpt && post.excerpt.rendered && (
                      <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    )}
                  </p>
                  <span className="date">Read More</span>
                </div>
              </div>
            </Link>
            {index === Math.ceil(posts.length / 2) - 1 &&
              <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                <img src="https://placehold.co/700x80" alt="" />
              </div>
            }
            {index !== posts.length - 1 &&
              <div className="mplinecontainer">
                <hr className="mpline" />
              </div>
            }
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default CategoryContent;
