import React from "react";
import { StyledBlogSection } from "./StyledBlogSection";

function BlogSection() {
  return (
    <StyledBlogSection>
      <div className="blog-header">
        <span>Creator words</span>
        <h2>Blogs & Articles</h2>
        <p className="about-blogs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          porro adipisci cumque odit placeat facilis sint iste consequuntur
          cupiditate nihil. Dolorum cum tempora velit minima impedit ab
          excepturi debitis. Eum.
        </p>
      </div>
    </StyledBlogSection>
  );
}

export default BlogSection;
