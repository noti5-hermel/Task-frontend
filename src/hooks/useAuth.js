import { useNavigate } from 'react-router-dom';
import { login as loginService, logout as logoutService } from '../services/auth.service';

/**
 * Hook para manejar la autenticación del usuario.
 */
export const useAuth = () => {
  const navigate = useNavigate();

  /**
   * Inicia sesión llamando al servicio y redirige a la página principal.
   * @param {object} credentials - { email, password_hash }
   */
  const login = async (credentials) => {
    try {
      const response = await loginService(credentials);
      // Si el login es exitoso, redirigimos a la página principal
      navigate('/principal', { replace: true });
      return response.data;
    } catch (error) {
      console.error('Fallo el inicio de sesión:', error);
      // Relanzamos el error para que el componente pueda mostrar un mensaje al usuario
      throw error;
    }
  };

  /**
   * Cierra la sesión del usuario y lo redirige a la página de login.
   */
  const logout = () => {
    logoutService(); // El servicio limpia el localStorage
    navigate('/login', { replace: true });
  };

  return { login, logout };
};
