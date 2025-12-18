import React from 'react';

const UserProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Juan Pérez" className="w-24 h-24 rounded-full mx-auto"/>
      <h2 className="text-xl font-bold mt-4">Juan Pérez</h2>
      <p className="text-gray-500">Técnico Senior</p>
      <p className="text-sm text-gray-500 mt-2">juan.perez@mantenimientopro.com</p>
      <div className="mt-4 flex justify-center items-center">
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Activo</span>
        <span className="text-gray-500 text-sm">ID: #8932</span>
      </div>
      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-2xl font-bold">48</p>
          <p className="text-gray-500">Tareas Completadas</p>
        </div>
        <div>
          <p className="text-2xl font-bold">12</p>
          <p className="text-gray-500">Tareas Activas</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
