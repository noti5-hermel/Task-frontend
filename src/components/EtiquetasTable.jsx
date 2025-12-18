import React from 'react';

const etiquetas = [
    {
        name: 'Urgente',
        color: 'red',
        activeTasks: 12,
        createdAt: '12 Oct, 2023'
    },
    {
        name: 'Mantenimiento',
        color: 'blue',
        activeTasks: 45,
        createdAt: '08 Oct, 2023'
    },
    {
        name: 'Revisión',
        color: 'yellow',
        activeTasks: 8,
        createdAt: '24 Sep, 2023'
    },
    {
        name: 'Limpieza',
        color: 'green',
        activeTasks: 23,
        createdAt: '15 Sep, 2023'
    },
    {
        name: 'Archivo',
        color: 'gray',
        activeTasks: 0,
        createdAt: '02 Jan, 2023'
    },
];

const EtiquetasTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <input type="text" placeholder="Buscar etiquetas..." className="border-gray-300 rounded-md shadow-sm w-1/2"/>
            <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-3">Ordenar por:</span>
                <select className="border-gray-300 rounded-md shadow-sm">
                    <option>Más recientes</option>
                </select>
            </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Etiqueta</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tareas Activas</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creada</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {etiquetas.map(etiqueta => (
                    <tr key={etiqueta.name}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className={`h-2.5 w-2.5 rounded-full bg-${etiqueta.color}-500 mr-3`}></div>
                                <span className="font-medium text-gray-800">{etiqueta.name}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{etiqueta.activeTasks} tareas</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{etiqueta.createdAt}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">...</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Mostrando 5 de 18</p>
            <div className="flex items-center">
                <button className="px-3 py-1 border rounded-md mr-2 text-gray-500 hover:bg-gray-100">{'<'}</button>
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">{'>'}</button>
            </div>
        </div>
    </div>
  )
}

export default EtiquetasTable;
