import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserManagementHeader from "../components/UserManagement/UserManagementHeader";
import UsersTable from "../components/UserManagement/UsersTable";
import NewUserForm from "../components/UserManagement/NewUserForm";

const UserManagement = () => {
  const [isNewUserFormVisible, setIsNewUserFormVisible] = useState(false);

  const handleNewUserClick = () => {
    setIsNewUserFormVisible(true);
  };

  const handleCloseNewUserForm = () => {
    setIsNewUserFormVisible(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserManagementHeader onNewUserClick={handleNewUserClick} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <UsersTable />
        </main>
      </div>
      {isNewUserFormVisible && <NewUserForm onClose={handleCloseNewUserForm} />}
    </div>
  );
};

export default UserManagement;
