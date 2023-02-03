import React from "react";
import { IoCardOutline, IoCartOutline, IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section className="flex flex-col w-[250px] h-full bg-neutral-900 ">
        <div className="py-2 px-2">
          <Link className="py-2 px-4 text-white flex gap-2 rounded hover:bg-neutral-700 mb-2" to="/dashboard/pengaturan">
            <IoSettings fontSize={25} />
            <div className="title">Pengaturan</div>
          </Link>
          <Link className="py-2 px-4 text-white flex gap-2 rounded hover:bg-neutral-700 mb-2" to="/dashboard/pembelian">
            <IoCartOutline fontSize={25} />
            <div className="title">Keranjang</div>
          </Link>
          <Link className="py-2 px-4 text-white flex gap-2 rounded hover:bg-neutral-700 mb-2" to="/dashboard/pembayaran">
            <IoCardOutline fontSize={25} />
            <div className="title">Pembayaran</div>
          </Link>
          <Link className="py-2 px-4 text-white flex gap-2 rounded hover:bg-neutral-700 mb-2" to="/dashboard/riwayat_pembelian">
            <IoSettings fontSize={25} />
            <div className="title">Riwayat Pembelian</div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
