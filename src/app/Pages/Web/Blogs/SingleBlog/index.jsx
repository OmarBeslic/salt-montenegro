import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//
import { useDispatch, useSelector } from "react-redux";
import {
  cleanUpBlogs,
  getSingleBlog,
} from "../../../../store/slices/blogSlice";
//
import { StyledSingleBlog } from "./StyledSingleBlog";
import useTranslate from "../../../../../Hooks/useTranslate";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";

function SingleBlog() {
  const { id } = useParams();
  const p = useTranslate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleBlog = useSelector((state) => state.blogs?.singleBlog);

  useEffect(() => {
    dispatch(getSingleBlog(id));

    return () => {
      dispatch(cleanUpBlogs("singleBlog"));
    };
  }, [dispatch, id]);

  return (
    <StyledSingleBlog>
      <div className="blog-container">
        <div className="blog-value">
          <h2>{p(singleBlog?.blogTitleSlug)}</h2>
          <img src={singleBlog?.mainPicture} alt="" />
          <div className="author-date">
            <span>{singleBlog?.author}</span>
            <span>{singleBlog?.published}</span>
          </div>
          <p>{p(singleBlog?.blogContent)}</p>
        </div>
        <div className="blog-paired left">
          <img src={singleBlog?.blogPicOne} alt="" />
          <p>{p(singleBlog?.blogContentTwo)}</p>
        </div>
        <div className="blog-paired right">
          <img src={singleBlog?.blogPicTwo} alt="" />
          <p>{p(singleBlog?.blogContentThree)}</p>
        </div>
        <SecondaryButton onClick={() => navigate(-1)}>Go back</SecondaryButton>
      </div>
    </StyledSingleBlog>
  );
}
export default SingleBlog;
