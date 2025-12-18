import React from 'react';

const tasks = [
  {
    id: '#M-105',
    priority: 'Crítica',
    category: 'Fontanería',
    title: 'Fuga de agua baño planta baja',
    time: 'Hoy, 10:00 AM',
    assignee: 'Sofia M.',
    status: 'En Progreso',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    priorityColor: 'red',
  },
  {
    id: '#M-106',
    priority: 'Alta',
    category: 'Climatización',
    title: 'Reparación de Aire Acondicionado - Edificio B',
    time: '15 Oct 2023',
    assignee: 'Carlos R.',
    status: 'Pendiente',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    priorityColor: 'orange',
  },
  {
    id: '#M-102',
    priority: 'Baja',
    category: 'Eléctrico',
    title: 'Reemplazo de luces pasillo norte',
    time: '10 Oct 2023',
    assignee: 'Ana L.',
    status: 'Completado',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g',
    priorityColor: 'green',
  },
  {
    id: '#M-101',
    priority: 'Media',
    category: 'Mecánico',
    title: 'Mantenimiento preventivo ascensor',
    time: '08 Oct 2023',
    assignee: 'Jorge P.',
    status: 'Cerrado',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704h',
    priorityColor: 'gray',
  },
];

const TaskCard = ({ task }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 flex items-center justify-between">
    <div className="flex items-center">
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-${task.priorityColor}-100 mr-4`}>
        {/* Icon based on priority - this is a placeholder */}
        <span className={`text-2xl text-${task.priorityColor}-600`}>!</span>
      </div>
      <div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="font-bold text-gray-800">{task.id}</span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-${task.priorityColor}-100 text-${task.priorityColor}-800`}>{task.priority}</span>
          <span className="text-blue-500 font-medium">{task.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{task.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
          <span>{task.time}</span>
          <span>{task.assignee}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center">
        <img src={task.avatar} alt={task.assignee} className="w-8 h-8 rounded-full"/>
        <span className="ml-3 mr-4 px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium">{task.status}</span>
        <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button>
    </div>
  </div>
);

const RecentTasks = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Tareas Recientes</h2>
        <span className="text-sm text-gray-500">Mostrando 5 de 12 tareas</span>
      </div>
      <div className="space-y-4">
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default RecentTasks;
