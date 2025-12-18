import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Principal/Header";
import DashboardContent from "../components/Principal/DashboardContent";
import TasksTable from "../components/Principal/TasksTable";
import RecentActivity from "../components/Principal/RecentActivity";
import AvailableTechnicians from "../components/Principal/AvailableTechnicians";

const Principal = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <DashboardContent />
          <TasksTable />
          <div className="flex mt-4">
            <div className="w-1/2 mr-2">
              <RecentActivity />
            </div>
            <div className="w-1/2 ml-2">
              <AvailableTechnicians />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Principal;
