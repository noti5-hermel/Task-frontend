import React from 'react';

const team = [
  {
    name: 'Sofia Martinez',
    role: 'Fontaneria',
    status: 'Libre',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Climatización',
    status: 'Ocupado',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f'
  },
  {
    name: 'Ana Lopez',
    role: 'Eléctrico',
    status: 'Ausente',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g'
  },
];

const AvailableTeam = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Equipo Disponible</h3>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver Todos</button>
      </div>
      <div className="space-y-4">
        {team.map(member => (
          <div key={member.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full"/>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${member.status === 'Libre' ? 'bg-green-100 text-green-800' : member.status === 'Ocupado' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTeam;
