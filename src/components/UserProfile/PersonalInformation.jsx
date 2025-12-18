import React from 'react';

const PersonalInformation = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Información Personal</h3>
        <div>
          <button className="px-4 py-2 border rounded-lg mr-2">Cancelar</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Guardar Cambios</button>
        </div>
      </div>
      <form className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" defaultValue="Juan" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apellidos</label>
          <input type="text" defaultValue="Pérez" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input type="email" defaultValue="juan.perez@mantenimientopro.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input type="text" defaultValue="+52 55 1234 5678" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cargo / Rol</label>
          <input type="text" defaultValue="Técnico de Mantenimiento Senior" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Departamento</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Instalaciones Eléctricas</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Sobre mí</label>
          <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="3">Escribe una breve descripción...</textarea>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;
