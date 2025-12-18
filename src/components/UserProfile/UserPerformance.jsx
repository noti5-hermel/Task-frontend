import React from 'react';

const UserPerformance = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Rendimiento</h3>
        <span className="text-blue-600 font-bold">4.8/5.0</span>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Puntualidad</span>
            <span>92%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '92%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <span>Calidad</span>
            <span>98%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-green-500 h-2.5 rounded-full" style={{width: '98%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPerformance;
