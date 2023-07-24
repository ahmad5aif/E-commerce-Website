import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import About from "../components/home/About";

const Layout = () => {
  const scrollRef = useRef(null);
  const handleScroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <Outlet />
      <About scrollRef={scrollRef} />
    </>
  );
};

export default Layout;
