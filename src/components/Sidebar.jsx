import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../hooks/useAuth';
import { getUserById } from '../services/userService';

const Sidebar = () => {
  const { logout } = useAuth();
  const [userName, setUserName] = useState('Loading...');

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userId = decoded.id;
          
          const response = await getUserById(userId);
          
          // MANEJO ROBUSTO: Comprobamos si la respuesta es un string y la parseamos
          const userData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
          
          // Ahora sí, accedemos a la propiedad del objeto parseado
          setUserName(userData.username || 'User');
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserName('User');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">ManteniApp</h1>
        <p className="text-sm text-gray-500">v1.2.0 - Admin</p>
      </div>
      <nav className="mt-8 flex-grow">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
          <span className="mx-4 font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Usuarios</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Tareas</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Etiquetas</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200">
          <span className="mx-4 font-medium">Reportes</span>
        </a>
      </nav>
      <div className="p-4">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" />
          <div className="ml-4">
            <p className="font-medium">{userName}</p>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Ver Perfil</a>
          </div>
        </div>
        <button 
          onClick={handleLogout} 
          className="w-full text-left flex items-center mt-5 text-gray-600 rounded-md hover:bg-gray-200 focus:outline-none">
          <span className="mx-4 font-medium">Cerrar Sesion</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
