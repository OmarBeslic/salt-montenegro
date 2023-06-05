import React from "react";
import { StyledBlog } from "./StyledBlog";
import SecondaryButton from "../../../../../Components/Shared/Buttons/secondarybutton";
import homeBg from "../../../../../../Assets/images/crew.webp";
import HomeForm from "../../SectionAbout/HomeForm";

function Blog() {
  return (
    <StyledBlog bgImg={homeBg}>
      <SecondaryButton font="18px" hover={true} />
      <div className="blog-content">
        <h2 className="Tittle">Sunny days Montenegro</h2>
        <span className="blog">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quia
          nam quam? Ratione quam non laborum ipsa doloremquam? Ratione quam non
          laborum ipsa doloremquam? Ratione quam non laborum ipsa doloremquam?
          Ratione quam non laborum ipsa doloremquam? Ratione quam non laborum
          ipsa dolorem
        </span>
        <div className="by-date">
          <span>By: John Doe</span>
          <span>22/05/2023</span>
        </div>
      </div>
    </StyledBlog>
  );
}

export default Blog;
