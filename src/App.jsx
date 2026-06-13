import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./components/Home/Home"));
const Fruits = lazy(() => import("./components/Fruits/Fruits"));
const Dairy = lazy(() => import("./components/Dairy/Dairy"));
const SeaFood = lazy(() => import("./components/SeaFood/SeaFood"));
const AllProducts = lazy(() => import("./components/AllProducts/AllProducts"));
const NotFound = lazy(() => import("./components/Error Page/Notfound"));

const PageLoader = () => (
  <div className="py-5 text-center text-green-500 font-medium animate-pulse">
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "fruits",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Fruits />
          </Suspense>
        ),
      },
      {
        path: "dairy",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Dairy />
          </Suspense>
        ),
      },
      {
        path: "seafood",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SeaFood />
          </Suspense>
        ),
      },
      {
        path: "all-products",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AllProducts />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;