import React from 'react';

const NextDueDate = () => {
  return (
    <div className="bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-200">
      <h3 className="font-bold text-lg mb-2">Próximo Vencimiento</h3>
      <div className="flex items-start">
        <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
          <span className="text-xl text-orange-600">!</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Inspección de Gas</p>
          <p className="text-sm text-gray-600">Mañana, 09:00 AM</p>
          <button className="text-sm font-medium text-orange-600 hover:text-orange-800 mt-1">Asignar técnico</button>
        </div>
      </div>
    </div>
  );
};

export default NextDueDate;
