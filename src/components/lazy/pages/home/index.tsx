import { lazy } from "react";
import LazyLoad from "../../LazyLoad";

const Home = lazy(() => import("../../../../Home"));

export const LazyHome = () => (
  <LazyLoad>
    <Home />
  </LazyLoad>
);
