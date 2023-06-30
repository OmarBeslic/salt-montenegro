import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import UserLayout from "./hoc/web/UserLayout";
import LoadingScreen from "./app/Components/Shared/LoadingScreen";

//User pages
const Homepage = lazy(() => import("./app/Pages/Web/Home"));
const AboutUs = lazy(() => import("./app/Pages/Web/About"));
const Testimonials = lazy(() => import("./app/Pages/Web/Testimonials"));
const Gallery = lazy(() => import("./app/Pages/Web/Gallery"));
const Blogs = lazy(() => import("./app/Pages/Web/Blogs"));
const SingleBlog = lazy(() => import("./app/Pages/Web/Blogs/SingleBlog"));
const ToursPage = lazy(() => import("./app/Pages/Web/Tours"));
const NotFound = lazy(() => import("./app/Components/User/NotFound"));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingScreen />}>
          <UserLayout />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <Homepage /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/testimonials", element: <Testimonials /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/blog/:id", element: <SingleBlog /> },
        { path: "/tours", element: <ToursPage /> },
      ],
    },
    { path: "404", element: <NotFound /> },
    // { path: "/administration", element:  },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
