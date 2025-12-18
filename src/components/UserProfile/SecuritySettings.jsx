import React from 'react';

const SecuritySettings = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-6">Seguridad</h3>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Contraseña</p>
            <p className="text-sm text-gray-500">Último cambio hace 3 meses</p>
          </div>
          <button className="px-4 py-2 border rounded-lg">Cambiar contraseña</button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Autenticación de dos factores</p>
            <p className="text-sm text-gray-500">Añade una capa extra de seguridad</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;
