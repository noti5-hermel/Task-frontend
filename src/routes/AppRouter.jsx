import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import Principal from '../pages/Principal';
import GestionTablas from '../pages/GestionTablas';
import Etiquetas from '../pages/Etiquetas';
import TaskDetail from '../pages/TaskDetail';
import UserProfile from '../pages/UserProfile';
import UserManagement from '../pages/UserManagement';

// Importamos el guardián que creamos
import ProtectedRoute from './ProtectedRoute';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: cualquiera puede acceder a /login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas Protegidas: solo usuarios con token válido pueden acceder */}
        <Route element={<ProtectedRoute />}>
          <Route path="/principal" element={<Principal />} />
          <Route path="/gestion-tablas" element={<GestionTablas />} />
          <Route path="/etiquetas" element={<Etiquetas />} />
          <Route path="/task-detail/:id" element={<TaskDetail />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>

        {/* (Opcional) Una ruta por defecto para redirigir si se entra a la raíz "/" */}
        <Route path="/" element={<Navigate to="/principal" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
