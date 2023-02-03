import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";

const Layout_admin = () => {
  return (
    <div className="main min-h-screen ">
      <div className="flex min-h-screen">
        <div className="sidebar bg-blue-500 min-h-full">
          <Sidebar />
        </div>
        <div className="content w-screen bg-red-500">
          <Header />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout_admin;
