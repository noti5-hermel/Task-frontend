import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  // Nuestro hook personalizado nos provee la lógica de login
  const { login } = useAuth(); 
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpiamos errores previos

    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData);

    console.log('Intentando iniciar sesión con:', credentials);
  
    try {
      // Llamamos a la función 'login' del hook, no 'loginUser'
      await login(credentials);
      // La redirección ya la maneja el hook, así que no necesitamos hacer nada más aquí.
    } catch (err) {
      // Si el hook lanza un error (ej. contraseña incorrecta), lo capturamos
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-between p-12">
        <div>
          <h1 className="text-3xl font-bold">TaskMaster</h1>
        </div>
        <div className="mb-24">
          <p className="text-2xl mb-4">
            "Efficiency is doing better what is already being done. TaskMaster helps you keep your operations running smoothly."
          </p>
          <p className="text-sm">System v2.4.0</p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in to manage your maintenance tasks and team workflow.</p>
          <form onSubmit={handleSubmit}>
            <Input label="Email or Username" name="email" placeholder="name@company.com" />
            <div className="flex justify-end mb-4">
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <Input label="Password" type="password" name="password_hash" placeholder="Enter your password" />
            
            {/* Mostramos el mensaje de error si existe */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <Button>Log In</Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-8 text-sm text-gray-500">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
