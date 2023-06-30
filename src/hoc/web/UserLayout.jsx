import React,{ useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import { getAllTranslations } from "../../app/store/slices/translationsSlice";
//
import Navigation from "../../app/Components/User/Navigation";
import Footer from "../../app/Components/User/Footer";
import ImageModal from "../../app/Components/User/ImageModal";

function UserLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTranslations());
  }, []);

  return (
    <>
      <ImageModal />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
