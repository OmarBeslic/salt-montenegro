import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//
import { getAllTranslations } from "../../app/store/slices/translationsSlice";
//
import Navigation from "../../app/Components/User/Navigation";
import Footer from "../../app/Components/User/Footer";
import Modals from "../../app/Components/User/Modals";

function UserLayout() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.layout?.modal?.name);

  useEffect(() => {
    dispatch(getAllTranslations());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Modals modal={modal} />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
