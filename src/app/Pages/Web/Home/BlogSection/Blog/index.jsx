import React from "react";
import { StyledBlog } from "./StyledBlog";
import homeBg from "../../../../../../Assets/images/crew.webp";

function Blog() {
  return (
    <StyledBlog bgImg={homeBg}>
      <div className="blog-picture" />

      <div className="blog-content">
        <h2 className="tittle">Sunny days Montenegro</h2>
        <span className="blog">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia
          nam quam? Ratione quam non laborum ipsa doloremquam? Ratione quam non
          laborum ipsa doloremquam? Ratione quam non laborum ipsa doloremquam?
          Ratione quam non laborum ipsa doloremquam? Ratione quam non laborum
          ipsa dolorem
        </span>
        <div className="by-date">
          <span>John Doe</span>
          <span>22/05/2023</span>
        </div>
      </div>
    </StyledBlog>
  );
}

export default Blog;
