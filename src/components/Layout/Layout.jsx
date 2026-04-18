import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <div
        className={`transition-all duration-500 ${showMenu ? "blur-xl" : ""}`}
      >
    <Outlet />
    <Footer />
      </div>
    </div>
  );
};

export default Layout;
