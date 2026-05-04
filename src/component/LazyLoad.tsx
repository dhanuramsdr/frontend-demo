// ============ components/LazyLoad.tsx ============
import React, { Suspense } from "react";

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  fallback = (
    <div className="flex justify-center items-center h-screen">Loading...</div>
  ),
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

// Optional: Create a HOC (Higher Order Component)
export function withLazyLoad<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode,
) {
  return (props: P) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
