import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
import { useDispatch, useSelector } from "react-redux";
import { cleanUpBlogs, getAllBlogs } from "../../../../store/slices/blogSlice";
import { getCountryList } from "../../../../store/slices/layoutSlice";
//
import useTranslate from "../../../../../Hooks/useTranslate";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
//
import SendMesage from "./Blog/SendMessage";
import { StyledBlogSection } from "./StyledBlogSection";
import Blog from "./Blog";
import { useTranslation } from "react-i18next";

function BlogSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const p = useTranslate();
  const { t } = useTranslation();
  const home = useSelector((state) => state.home?.homepage);
  const blogs = useSelector((state) => state.blogs?.blogs);

  useEffect(() => {
    dispatch(getCountryList());
    dispatch(getAllBlogs());
    return () => {
      dispatch(cleanUpBlogs("blogs"));
    };
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
            {blogs?.slice(0, 2).map((el, idx) => {
              return <Blog blog={el} key={idx} />;
            })}
          </div>
          <SecondaryButton
            font="22px"
            hover={true}
            onClick={() => navigate("/blog")}
            className="all-blogs-btn"
          >
            {t("home.viewAll")}
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
