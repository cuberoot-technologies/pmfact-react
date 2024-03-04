import React, { useState, useEffect } from "react";

const MainBoxArticle = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [categoryId]);

  const fetchPosts = () => {
    if (!categoryId) {
      setIsLoading(false);
      return;
    }

    fetch(`https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=1&orderby=date&order=desc`)
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        if (Array.isArray(data) && data.length > 0) {
          const post = data[0];
          const extractedPost = {
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            featuredImage: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null
          };
          setPosts([extractedPost]);
        } else {
          setPosts([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="main-box-article">
      {isLoading ? (
        <div>Loading...</div>
      ) : posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="news-block main-big-news">
            {post.featuredImage && <img src={post.featuredImage} alt="" />}
            <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>{post.title}</h6>
            <h3 className="section-heading main-article">{post.title}</h3>
            <p className="excerpt mainblock" style={{ marginBlockStart: '0rem', maxHeight: '11em', overflow: 'hidden' }} dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default MainBoxArticle;
