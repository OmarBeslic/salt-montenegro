import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../app/Components/User/Navigation";
import Footer from "../../app/Components/User/Footer";

function UserLayout() {
  console.log(document.scrollTop)

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
