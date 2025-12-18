import React from "react";
import Sidebar from "../components/Sidebar";
import UserManagementHeader from "../components/UserManagement/UserManagementHeader";
import UsersTable from "../components/UserManagement/UsersTable";

const UserManagement = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserManagementHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <UsersTable />
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
