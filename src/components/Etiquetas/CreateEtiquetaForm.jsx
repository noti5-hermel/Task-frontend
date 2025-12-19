import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const CreateEtiquetaForm = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    hex: '#000000',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Crear Nueva Etiqueta</h2>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input type="text" id="nombre" placeholder="Ej. Urgente, Eléctrico..." className="w-full border-gray-300 rounded-md shadow-sm"/>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
        <div className="relative">
          <div
            className="w-full h-10 px-1 py-1 border border-gray-300 rounded-md cursor-pointer"
            style={{ backgroundColor: color.hex }}
            onClick={handleClick}
          />
          {displayColorPicker ? (
            <div className="absolute z-10">
              <div className="fixed inset-0" onClick={handleClose} />
              <SketchPicker color={color.hex} onChange={handleChange} />
            </div>
          ) : null}
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Añadir Etiqueta</button>
    </div>
  );
};

export default CreateEtiquetaForm;
