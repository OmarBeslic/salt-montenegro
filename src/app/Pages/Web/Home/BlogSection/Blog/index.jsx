import React from "react";
import { StyledBlog } from "./StyledBlog";
import useTranslate from "../../../../../../Hooks/useTranslate";
import { useNavigate } from "react-router-dom";

function Blog({ blog }) {
  const p = useTranslate();
  const navigate = useNavigate();
  return (
    <StyledBlog
      bgImg={blog?.mainPicture}
      onClick={() => navigate(`/blog/${blog?.id}`)}
    >
      <div className="blog-picture" />
      <div className="blog-content">
        <h2 className="tittle">{p(blog?.blogTitleSlug)}</h2>
        <span className="blog">{p(blog?.blogContent)}</span>
        <div className="by-date">
          <span>{blog?.author}</span>
          <span>{blog?.published}</span>
        </div>
      </div>
    </StyledBlog>
  );
}

export default Blog;
