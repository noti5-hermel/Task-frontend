import React from 'react';

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
        <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm">
          <option>Estado: Todos</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm">
          <option>Asignado a: Todos</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm">
          <option>Prioridad: Alta</option>
        </select>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Limpiar filtros</button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-md bg-gray-200 text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <button className="p-2 rounded-md text-gray-400 hover:bg-gray-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
