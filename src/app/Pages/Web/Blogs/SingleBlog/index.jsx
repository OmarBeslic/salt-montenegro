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
import { openModal } from "../../../../store/slices/layoutSlice";
import Page from "../../../../Components/User/Page";

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
    <Page
      title={p(singleBlog?.blogTitleSlug)}
      meta="Delve into the captivating world of Salt Montenegro's blog. Gain valuable insights, insider tips, and expert knowledge about the best fishing spots, panoramic wonders, romantic hideaways, and memorable adventures in Montenegro. Discover the hidden gems of this enchanting destination and plan your dream getaway with confidence."
      keywords="fishing spots, panoramic wonders, romantic hideaways, memorable adventures, Montenegro travel tips, insider knowledge, Salt Montenegro blog, travel insights, coastal destinations, dream getaway"
    >
      <StyledSingleBlog>
        <div className="blog-container">
          <div className="blog-value">
            <h2>{p(singleBlog?.blogTitleSlug)}</h2>
            <img loading="lazy"
              src={singleBlog?.mainPicture}
              alt="Main"
              title="Main"
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: singleBlog?.mainPicture,
                  })
                )
              }
            />
            <div className="author-date">
              <span>{singleBlog?.author}</span>
              <span>{singleBlog?.published}</span>
            </div>
            <p>{p(singleBlog?.blogContent)}</p>
          </div>
          <div className="blog-paired left">
            <img loading="lazy"
              src={singleBlog?.blogPicOne}
              alt="Picone"
              title="Picone"
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: singleBlog?.blogPicOne,
                  })
                )
              }
            />
            <p>{p(singleBlog?.blogContentTwo)}</p>
          </div>
          <div className="blog-paired right">
            <img loading="lazy"
              src={singleBlog?.blogPicTwo}
              alt="Pic Two"
              title="Pic Two"
              onClick={() =>
                dispatch(
                  openModal({
                    name: "image",
                    isOpen: true,
                    data: singleBlog?.blogPicTwo,
                  })
                )
              }
            />
            <p>{p(singleBlog?.blogContentThree)}</p>
          </div>
          <SecondaryButton onClick={() => navigate(-1)}>
            Go back
          </SecondaryButton>
        </div>
      </StyledSingleBlog>
    </Page>
  );
}
export default SingleBlog;
