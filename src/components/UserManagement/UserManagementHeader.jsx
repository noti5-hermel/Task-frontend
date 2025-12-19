import React from "react";

const UserManagementHeader = ({ onNewUserClick }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div>
        <h1 className="text-xl font-bold">Gestión de Usuarios</h1>
        <p className="text-sm text-gray-500">Administra los accesos, roles y permisos de los técnicos y administradores.</p>
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 font-medium text-gray-700 bg-white border rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Exportar
        </button>
        <button 
          className="ml-4 px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={onNewUserClick}
        >
          + Añadir Usuario
        </button>
      </div>
    </header>
  );
};

export default UserManagementHeader;
