import React, { useState, useEffect } from "react";

const MainBoxArticle = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [categoryId]);

  const fetchPosts = () => {
    fetch(`https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=3`)
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        const extractedPosts = data.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          featuredImage: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null
        }));
        setPosts(extractedPosts);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }); 
  };

  
  const defaultData = {
    title: "Default Title",
    excerpt: "Default Excerpt",
    featuredImage: "https://placehold.co/300x200" 
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
            <p class="excerpt mainblock" style={{marginBlockStart:'0rem'}} dangerouslySetInnerHTML={{__html: post.excerpt}}></p>
          </div>
        ))
      ) : (
        <div className="news-block main-big-news">
          <img src={defaultData.featuredImage} alt="" />
          <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>{defaultData.title}</h6>
          <h3 className="section-heading main-article">{defaultData.title}</h3>
          <p class="excerpt mainblock" style={{marginBlockStart:'0rem'}}  dangerouslySetInnerHTML={{__html: defaultData.excerpt}}></p>
        </div>
      )}
    </div>
  );
};

export default MainBoxArticle;
