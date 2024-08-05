import { FC, ReactNode, Suspense } from "react";

interface LazyLoadProps {
  children: ReactNode;
}

const LazyLoad: FC<LazyLoadProps> = ({ children }) => {
  return <Suspense fallback={<p>loading...</p>}>{children}</Suspense>;
};

export default LazyLoad;
