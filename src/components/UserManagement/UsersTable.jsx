import React from 'react';

const users = [
  {
    name: 'Juan Pérez',
    email: 'juan.perez@empresa.com',
    role: 'Técnico Senior',
    department: 'Mantenimiento',
    status: 'Activo',
    lastAccess: '24 Oct 2023',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Maria Rodriguez',
    email: 'maria.r@empresa.com',
    role: 'Administrador',
    department: 'Gerencia',
    status: 'Activo',
    lastAccess: 'Hace 2 horas',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    name: 'Carlos Ruiz',
    email: 'c.ruiz@empresa.com',
    role: 'Técnico Junior',
    department: 'Reparaciones',
    status: 'Pendiente',
    lastAccess: '-',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
  {
    name: 'Ana Garcia',
    email: 'ana.garcia@empresa.com',
    role: 'Supervisor',
    department: 'Operaciones',
    status: 'Inactivo',
    lastAccess: '01 Sep 2023',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g',
  },
  {
    name: 'Luis Martinez',
    email: 'l.martinez@empresa.com',
    role: 'Técnico',
    department: 'Instalaciones',
    status: 'Activo',
    lastAccess: 'Ayer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704h',
  },
];

const UsersTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nombre, correo o rol..."
              className="pl-10 pr-4 py-2 border rounded-lg w-80"
            />
            <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <select className="ml-4 border rounded-lg py-2 px-4">
            <option>Todos los Roles</option>
          </select>
          <select className="ml-4 border rounded-lg py-2 px-4">
            <option>Todos los Estados</option>
          </select>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
            <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
            <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departamento</th>
            <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último Acceso</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
              <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{user.department}</td>
              <td className="py-4 px-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Activo' ? 'bg-green-100 text-green-800' : user.status === 'Inactivo' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">{user.lastAccess}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-700">Mostrando 1 a 5 de 42 resultados</p>
        <div className="flex items-center">
          <button className="px-3 py-1 border rounded-md mr-2">{'<'}</button>
          <button className="px-3 py-1 border rounded-md mr-2 bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 border rounded-md mr-2">2</button>
          <button className="px-3 py-1 border rounded-md mr-2">3</button>
          <span>...</span>
          <button className="px-3 py-1 border rounded-md ml-2">8</button>
          <button className="px-3 py-1 border rounded-md ml-2">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
