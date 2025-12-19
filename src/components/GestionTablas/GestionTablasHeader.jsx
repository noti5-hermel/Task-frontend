import React from "react";

const GestionTablasHeader = ({ onNewTaskClick }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div>
        <h1 className="text-xl font-bold">Gestión de Tablas</h1>
      </div>
      <div className="flex items-center">
        <button 
          className="ml-4 px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={onNewTaskClick}
        >
          + Nueva Tarea
        </button>
      </div>
    </header>
  );
};

export default GestionTablasHeader;
