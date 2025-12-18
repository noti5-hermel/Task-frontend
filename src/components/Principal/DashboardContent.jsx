import React from "react";
import SummaryCard from "../SummaryCard";

const DashboardContent = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Hola, Carlos</h1>
          <p className="text-gray-500">Aqui tienes el resumen de las operaciones de mantenimiento de hoy.</p>
        </div>
        <div className="text-sm text-gray-500">
          Hoy: 24 Octubre, 2023
        </div>
      </div>
      <div className="flex mb-4">
        <SummaryCard
          title="Pendientes"
          value="12"
          percentage="+2%"
          change="vs ayer"
          icon={<svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>}
          color="text-red-500"
        />
        <SummaryCard
          title="En Progreso"
          value="5"
          change="3 tecnicos activos"
          icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
          color="text-blue-500"
        />
        <SummaryCard
          title="Completadas"
          value="28"
          percentage="+12%"
          change="esta semana"
          icon={<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
          color="text-green-500"
        />
        <SummaryCard
          title="Eficiencia"
          value="94%"
          icon={<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
          color="text-purple-500"
        />
      </div>
    </main>
  );
};

export default DashboardContent;
