import { useEffect, useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";
import { useSideNaveStore } from "../Globelstate/Store";

const Main = () => {
  const { sidenav, setSidenav } = useSideNaveStore();

  console.log("sidenav", sidenav);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setSidenav(isDesktop);
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidenav]); // ✅ Add setSidenav as dependency

  return (
    <div className="flex h-screen">
      <Sidenav state={sidenav} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header state={sidenav} setState={setSidenav} />
        <main className="flex-1 p-4 overflow-auto">
          <div className="w-full">
            <Outlet context={{ sidenav, setSidenav }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
