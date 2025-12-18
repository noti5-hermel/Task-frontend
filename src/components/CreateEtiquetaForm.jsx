import React from 'react';

const colors = ['red', 'orange', 'green', 'blue', 'purple', 'gray'];

const CreateEtiquetaForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Crear Nueva Etiqueta</h2>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input type="text" id="nombre" placeholder="Ej. Urgente, Eléctrico..." className="w-full border-gray-300 rounded-md shadow-sm"/>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
        <div className="flex space-x-3">
          {colors.map(color => (
            <button key={color} className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-transparent focus:outline-none focus:border-blue-500`}></button>
          ))}
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Añadir Etiqueta</button>
    </div>
  )
}

export default CreateEtiquetaForm;
