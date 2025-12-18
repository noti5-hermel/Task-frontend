import React from 'react';

const Summary = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-4">Resumen de Hoy</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Pendientes</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">En Progreso</p>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Críticas</p>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Cerradas</p>
          <p className="text-2xl font-bold">14</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
