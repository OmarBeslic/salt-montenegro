import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../app/Components/User/Navigation";
import Footer from "../../app/Components/User/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTranslations } from "../../app/store/slices/translationsSlice";
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
