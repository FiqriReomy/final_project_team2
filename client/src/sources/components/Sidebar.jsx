import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section className="flex flex-col w-full bg-slate-300 p-2 rounded">
        <Link className="py-2 px-4" to="/dashboard/setting">
          Pengaturan
        </Link>
        <Link className="py-2 px-4" to="/dashboard/purchase">
          Purchase
        </Link>
        <Link className="py-2 px-4" to="/dashboard/history">
          History
        </Link>
        <Link className="py-2 px-4" to="/dashboard/addproduct">
          Product
        </Link>
      </section>
    </>
  );
};

export default Sidebar;
