import React, { useEffect, useState } from "react";
import { StyledBlogSection } from "./StyledBlogSection";
import Blog from "./Blog";
import HomeForm from "../SectionAbout/HomeForm";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList } from "../../../../store/slices/layoutSlice";
import useTranslate from "../../../../../Hooks/useTranslate";
import PrimaryButton from "../../../../Components/Shared/Buttons/primaryButton";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import InputField from "../../../../../FormFields/InputField";
import SendMesage from "./Blog/SendMessage";
function BlogSection() {
  const dispatch = useDispatch();
  const p = useTranslate();
  const home = useSelector((state) => state.home?.homepage);

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  return (
    <StyledBlogSection>
      <div className="container">
        <div className="left-content">
          <div className="blog-header">
            <span>{p(home?.homeBlogSubtitle)}</span>
            <h2>{p(home?.homeBlogTitle)}</h2>
            <p className="about-blogs">{p(home?.homeBlogText)}</p>
          </div>
          <div className="blogs-grid">
            <Blog />
            <Blog />
          </div>
          <SecondaryButton font="22px" hover={true} className="all-blogs-btn">
            All Blogs
          </SecondaryButton>
        </div>
        <div className="right-content">
          <div className="contact-header">
            <span className="subtitle">{p(home?.homeSendMsgSubtitle)}</span>
            <h2>{p(home?.homeSendMsgTitle)}</h2>
          </div>

          <SendMesage />
        </div>
      </div>
    </StyledBlogSection>
  );
}

export default BlogSection;
