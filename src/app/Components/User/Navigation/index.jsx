import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { layoutChange } from "../../../store/slices/layoutSlice";
import useWindowSize from "../../../../Hooks/useWindowSize";
//
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

function Navigation() {
  const size = useWindowSize();
  const dispatch = useDispatch();
  const isDesktop = useSelector((state) => state.layout?.device) === "desktop";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(layoutChange(size.width));
  }, [size?.width]);
console.log(isDesktop,size?.width)
  return <>
  {isDesktop ? <DesktopNav scrolled={scrolled} /> : <MobileNav scrolled={scrolled}  />}
  
  </>
}

export default Navigation;
