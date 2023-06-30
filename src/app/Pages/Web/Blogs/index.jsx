import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { getAllBlogs } from "../../../store/slices/blogSlice";
import { useTranslation } from "react-i18next";
//
import { StyledBlogs } from "./StyledBlogs";
import Page from "../../../Components/User/Page";
import Blog from "../Home/BlogSection/Blog";
import Waves from "../../../../Assets/Animations/Waves";

function Blogs() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs?.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <Page title={t("nav.blog")} meta="Galerija">
      <StyledBlogs>
        <div className="blogs-header">
          <span>All blogs</span>
          <h2>Creator words</h2>
        </div>

        <div className="blogs-container">
          <Waves />
          <div className="blogs-grid">
            {blogs?.map((el,idx) => {
              return <Blog blog={el} key={idx}/>;
            })}
          </div>
        </div>
      </StyledBlogs>
    </Page>
  );
}

export default Blogs;
