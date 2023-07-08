import React, { useEffect } from "react";
import { StyledAbout } from "./StyledAbout";
import Sailor from "../Crew";
import photo from "../../../../../Assets/images/rods.webp";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../store/slices/layoutSlice";
import { getAboutUs, getCrew } from "../../../../store/slices/homeSlice";
import useTranslate from "../../../../../Hooks/useTranslate";

function OutStory() {
  const dispatch = useDispatch();
  const p = useTranslate();
  const crew = useSelector((state) => state.home?.crew);
  const about = useSelector((state) => state.home?.aboutUs);

  useEffect(() => {
    dispatch(getAboutUs());
    dispatch(getCrew());
  }, []);

  return (
    <StyledAbout>
      <div className="container">
        <div className="overlay-about"></div>
        <div className="aboutus">
          <span>{p(about?.pageSubtitle)}</span>
          <h2>{p(about?.pageTitle)}</h2>
        </div>
        <div className="pictures-div">
          <img
            src={about?.smallerPhoto}
            alt="Small photo"
            title="Small Photo"
            className="smaller"
            onClick={() =>
              dispatch(openModal({ name: "image", isOpen: true, data: about?.smallerPhoto }))
            }
          />
          <img
            src={about?.biggerPhoto}
            alt="Big photo"
            title="Big photo"
            className="bigger"
            onClick={() =>
              dispatch(openModal({ name: "image", isOpen: true, data: about?.biggerPhoto }))
            }
          />
        </div>
      </div>
      <p>{p(about?.pageText)} </p>
      <div className="crew">
        {crew?.map((el) => {
          return <Sailor sailor={el} />;
        })}
      </div>
      <div className="location">
        <h2>{p(about?.locationText)}</h2>
        <iframe
          className="gooMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.2910917787191!2d19.087818076924197!3d42.09710201232635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e7151026a1aed%3A0x9a6adfdce4c86157!2sPort%20of%20Bar!5e0!3m2!1sen!2s!4v1688316107523!5m2!1sen!2s"
          title="map"
          loading="lazy"
        ></iframe>
        <p>{about?.location}</p>
      </div>
    </StyledAbout>
  );
}

export default OutStory;
