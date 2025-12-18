import React from "react";

const TasksTable = () => {
  const tasks = [
    {
      task: "Fuga de agua en Sala de Maquinas",
      location: "Edificio A - Sotano 2",
      assignedTo: "Juan P.",
      tags: ["Urgente", "Fontaneria"],
      status: "Pendiente",
    },
    {
      task: "Revision Mensual Aire Acondicionado",
      location: "Oficina Principal - Planta 3",
      assignedTo: "Ana G.",
      tags: ["Preventivo", "HVAC"],
      status: "En Progreso",
    },
    {
      task: "Cambio de luminarias LED",
      location: "Pasillo Este - Planta Baja",
      assignedTo: "Miguel R.",
      tags: ["Media", "Electrico"],
      status: "Pendiente",
    },
    {
      task: "Reparacion puerta de acceso",
      location: "Entrada Principal",
      assignedTo: "Roberto S.",
      tags: ["Alta", "Carpinteria"],
      status: "Completada",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Tareas Prioritarias Recientes</h2>
          <p className="text-gray-500">
            Listado de mantenimientos que requieren atencion inmediata.
          </p>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
            Filtrar
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Ver Todo
          </button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">TAREA / UBICACION</th>
            <th className="pb-2">ASIGNADO A</th>
            <th className="pb-2">ETIQUETAS</th>
            <th className="pb-2">ESTADO</th>
            <th className="pb-2">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="py-2">
                <p className="font-medium">{task.task}</p>
                <p className="text-sm text-gray-500">{task.location}</p>
              </td>
              <td className="py-2">{task.assignedTo}</td>
              <td className="py-2">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 mr-2 text-sm rounded-full ${{
                      Urgente: "bg-red-200 text-red-800",
                      Preventivo: "bg-yellow-200 text-yellow-800",
                      Media: "bg-blue-200 text-blue-800",
                      Alta: "bg-purple-200 text-purple-800",
                      Fontaneria: "bg-gray-200 text-gray-800",
                      HVAC: "bg-gray-200 text-gray-800",
                      Electrico: "bg-gray-200 text-gray-800",
                      Carpinteria: "bg-gray-200 text-gray-800",
                    }[tag] || "bg-gray-200 text-gray-800"}`}
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 text-sm rounded-full ${{
                    Pendiente: "bg-yellow-200 text-yellow-800",
                    "En Progreso": "bg-blue-200 text-blue-800",
                    Completada: "bg-green-200 text-green-800",
                  }[task.status] || "bg-gray-200 text-gray-800"}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="py-2">
                <button>
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">Mostrando 1-4 de 12 tareas</p>
        <div>
          <button className="px-3 py-1 mr-2 text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300">
            &lt;
          </button>
          <button className="px-3 py-1 text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksTable;
