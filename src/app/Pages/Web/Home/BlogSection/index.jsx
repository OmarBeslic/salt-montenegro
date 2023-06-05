import React, { useEffect, useState } from "react";
import { StyledBlogSection } from "./StyledBlogSection";
import Blog from "./Blog";
import HomeForm from "../SectionAbout/HomeForm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList } from "../../../../store/slices/layoutSlice";
function BlogSection() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state?.layout?.countries);
  useEffect(() => {
    dispatch(getCountryList());
  }, []);
  console.log(countries?.filter(el => el.name === "Russia"), "countries");
  return (
    <StyledBlogSection>
      <div className="container">
        <div className="left-content">
          <div className="blog-header">
            <span>Creator words</span>
            <h2>Blogs</h2>
            <p className="about-blogs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              porro adipisci cumque odit placeat facilis sint iste consequuntur
              cupiditate nihil. Dolorum cum tempora velit minima impedit ab
              excepturi debitis. Eum.
            </p>
          </div>
          <div className="blogs-grid">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
        <div className="right-content">
          <div className="contact-header">
            <span>Contact Us</span>
            <h2>Send us a message</h2>
          </div>

          <HomeForm />
        </div>
        {/* <PrimaryButton font="22px" hover={true} className="all-blogs-btn">
        All Blogs  <ArrowForwardIosIcon />
      </PrimaryButton> */}
      </div>
    </StyledBlogSection>
  );
}

export default BlogSection;
