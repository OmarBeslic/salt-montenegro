import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { layoutChange } from "../../../store/slices/layoutSlice";
//
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

function Navigation() {
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.layout?.device)==="desktop";
  const [scrolled, setScrolled] = useState(false);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    dispatch(layoutChange(screenSize?.width));
  }, []);

  console.log(screenSize.width,isDesktop, "device");
  return (
    <>
      {isDesktop ? (
        <DesktopNav scrolled={scrolled} />
      ) : (
        <MobileNav scrolled={scrolled} />
      )}
    </>
  );
}

export default Navigation;
