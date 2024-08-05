import { createBrowserRouter } from "react-router-dom";
import { LazyHome } from "../../components/lazy/lazyPages";

export const publicRoutes = [
  {
    path: "/",
    element: <LazyHome />,
  },
];

export const authRoutes = [];

export const router = createBrowserRouter([...publicRoutes, ...authRoutes]);
