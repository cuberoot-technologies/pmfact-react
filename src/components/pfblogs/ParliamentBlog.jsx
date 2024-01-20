import React from 'react'
import ParliamentBlogProfile from './ParliamentBlogProfile'
import ParliamentBlogPerformance from './ParliamentBlogPerformance'
import ParliamentBlogBar from './ParliamentBlogBar'

const ParliamentBlog = () => {
  return (
<>
<div className="mps">
    <div className="pf-blog container">
        <ParliamentBlogProfile/>
    </div>
    <div className="pf-blog container">
        <ParliamentBlogPerformance/>
    </div>
    <div className="pf-blog container">
        <ParliamentBlogBar/>
    </div>
</div>
</>
    )
}

export default ParliamentBlog