import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="max-w-screen border-b-2">
      <div className="mx-auto px-5 max-w-screen-xl">
        <div className="flex min-h-[80vh] mb-10">
          <div className="leftside">
            <Sidebar />
          </div>
          <div className="rightsid w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
