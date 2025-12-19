import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Principal/Header";
import DashboardContent from "../components/Principal/DashboardContent";
import TasksTable from "../components/Principal/TasksTable";
import RecentActivity from "../components/Principal/RecentActivity";
import AvailableTechnicians from "../components/Principal/AvailableTechnicians";
import NewTaskForm from "../components/GestionTablas/NewTaskForm";

const Principal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onNewTaskClick={handleOpenModal} />
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

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <NewTaskForm onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Principal;
