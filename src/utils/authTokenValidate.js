import { jwtDecode } from 'jwt-decode';

export const isTokenValid = () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // en segundos

    // Comprueba si el tiempo de expiración es mayor que el tiempo actual
    if (decodedToken.exp > currentTime) {
      return true; // El token sigue siendo válido
    } else {
      // El token ha expirado, así que lo eliminamos del almacenamiento
      localStorage.removeItem('authToken');
      return false;
    }
  } catch (error) {
    // Si hay un error al decodificar, el token es inválido
    console.error("Error decoding token:", error);
    localStorage.removeItem('authToken');
    return false;
  }
};