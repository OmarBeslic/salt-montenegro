import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import UserLayout from "./hoc/web/UserLayout";
import LoadingScreen from "./app/Components/Shared/LoadingScreen";

//User pages
const Homepage = lazy(() => import("./app/Pages/Web/Home"));

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
        // { path: '404', element: <NotFound/>}

      ],
    },
    // { path: "/administration", element:  },
    // { path: '*', element: <Navigate to="/404" replace /> }

  ]);
}
