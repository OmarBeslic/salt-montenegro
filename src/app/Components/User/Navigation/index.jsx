import React, { useEffect } from "react";
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
  const isDesktop = useSelector((state) => state.layout?.layout) === "desktop";
  
  useEffect(() => {
    dispatch(layoutChange(size.width));
  }, [size?.width]);

  return <>
  {isDesktop ? <DesktopNav /> : <MobileNav />}
  
  </>
}

export default Navigation;
