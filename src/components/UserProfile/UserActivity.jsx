import React from 'react';

const activities = [
    { task: 'Revisión Aire Acondicionado', location: 'Sala de Juntas B', status: 'En Progreso', date: 'Hoy, 10:30 AM' },
    { task: 'Cambio de Cableado', location: 'Oficina 304', status: 'Completada', date: 'Ayer, 4:15 PM' },
    { task: 'Fuga de Agua', location: 'Baños Planta Baja', status: 'Pendiente', date: '24 Oct, 9:00 AM' },
];

const statusColors = {
    'En Progreso': 'bg-yellow-100 text-yellow-800',
    'Completada': 'bg-green-100 text-green-800',
    'Pendiente': 'bg-red-100 text-red-800',
}

const UserActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Actividad Reciente</h3>
            <a href="#" className="text-sm text-blue-600">Ver todas</a>
        </div>
        <table className="w-full text-left">
            <thead>
                <tr className="text-sm text-gray-500">
                    <th className="pb-4">TAREA</th>
                    <th className="pb-4">ESTADO</th>
                    <th className="pb-4">FECHA</th>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                        <td className="py-4">
                            <p className="font-semibold">{activity.task}</p>
                            <p className="text-sm text-gray-500">{activity.location}</p>
                        </td>
                        <td>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[activity.status]}`}>
                                {activity.status}
                            </span>
                        </td>
                        <td className="text-sm text-gray-500">{activity.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default UserActivity;
