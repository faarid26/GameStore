import React from 'react'
import { Link } from 'react-router-dom'
function BlogHeader() {
  return (
    <>
    <div className="blog-header-container">
        <div className="blog-header">
            <Link to="/" className="blog-header-logo">
                <img src="/logo.png" alt="" />
            </Link>
        </div>
    </div>
    </>
  )
}

export default BlogHeader