import React from "react";
import DashboardStatsGrid from "../../components/admin/DashboardStatsGrid";
import TransactionChart from "../../components/admin/TransactionChart";
import RecentOrders from "../../components/admin/RecentOrders";
import BuyerProfilePieChart from "../../components/admin/BuyerProfilePieChart";
import PopularProducts from "../../components/admin/PopularProducts";

const Dashboard = () => {
  return (
    <div className="bg-neutral-100 p-4 ">
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
