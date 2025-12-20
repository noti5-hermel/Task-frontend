import {BrowserRouter,Routes,Route} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import Principal from '../pages/Principal';
import GestionTablas from '../pages/GestionTablas';
import Etiquetas from '../pages/Etiquetas'; 
import TaskDetail from '../pages/TaskDetail';
import UserProfile from '../pages/UserProfile';
import UserManagement from '../pages/UserManagement';


export default function AppRouter() {
return(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/principal" element={<Principal />} />
      <Route path="/gestion-tablas" element={<GestionTablas />} />
      <Route path="/etiquetas" element={<Etiquetas />} />
      <Route path="/task-detail/:id" element={<TaskDetail />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  </BrowserRouter>
);

}