import React from 'react';

const MaintenanceSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Maintenance Manager</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <span className="mr-3">Icon</span>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 font-bold rounded-lg">
            <span className="mr-3">Icon</span>
            Tasks
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <span className="mr-3">Icon</span>
            Users
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <span className="mr-3">Icon</span>
            Inventory
          </a>
        </nav>
      </div>
      <div className="p-6">
        <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <span className="mr-3">Icon</span>
          App Settings
        </a>
      </div>
    </aside>
  );
};

export default MaintenanceSidebar;
