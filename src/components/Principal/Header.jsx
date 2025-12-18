import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <h1 className="text-xl font-bold ml-4">Dashboard de Mantenimiento</h1>
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
          + Nueva Tarea
        </button>
      </div>
    </header>
  );
};

export default Header;
