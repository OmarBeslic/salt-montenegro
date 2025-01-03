import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { cleanUpBlogs, getAllBlogs } from "../../../store/slices/blogSlice";
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

    return () => {
      dispatch(cleanUpBlogs("blogs"));
    };
  }, []);

  return (
    <Page
      title={t("nav.blog")}
      meta="Explore a treasure trove of captivating blogs at Salt Montenegro. Dive into a world of travel stories, fishing tips, scenic wonders, and adventure inspiration. Discover valuable insights and expert advice to enhance your next coastal getaway in Montenegro. Immerse yourself in our blog collection and embark on a journey of discovery."
      keywords=" travel blogs, fishing tips, scenic wonders, adventure inspiration, coastal getaway, Montenegro travel, Salt Montenegro blog, travel stories, expert advice, coastal exploration, destination insights."
    >
      <StyledBlogs>
        <div className="blogs-header">
          <span>All blogs</span>
          <h2>Creator words</h2>
        </div>

        <div className="blogs-container">
          <Waves />
          <div className="blogs-grid">
            {blogs?.map((el, idx) => {
              return <Blog blog={el} key={idx} />;
            })}
          </div>
        </div>
      </StyledBlogs>
    </Page>
  );
}

export default Blogs;
