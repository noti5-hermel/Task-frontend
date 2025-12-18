import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold">ManteniApp</h1>
        <p className="text-sm text-gray-500">v1.2.0 - Admin</p>
      </div>
      <nav className="mt-8">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
          <span className="mx-4 font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Usuarios</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Tareas</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Etiquetas</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Reportes</span>
        </a>
      </nav>
      <div className="absolute bottom-0 p-4">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" />
          <div className="ml-4">
            <p className="font-medium">Carlos Admin</p>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Ver Perfil</a>
          </div>
        </div>
        <a href="#" className="flex items-center mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Cerrar Sesion</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
