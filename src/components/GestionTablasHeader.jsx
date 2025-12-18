import React from 'react';

const GestionTablasHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tablero de Gestión</h1>
        <p className="text-sm text-gray-500">Organiza y gestiona las tareas de mantenimiento de tu equipo.</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Exportar
        </button>
        <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-700">
          + Nueva Tarea
        </button>
      </div>
    </div>
  );
};

export default GestionTablasHeader;
