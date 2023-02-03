import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const DashboardStatsGrid = () => {
  const [TotalProduk, setRows] = useState("");
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    setRows(response.data.totalRows);
  };

  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Penjualan Produk</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Pendapatan</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12313</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Product</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{TotalProduk} produk</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};
function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}

export default DashboardStatsGrid;
