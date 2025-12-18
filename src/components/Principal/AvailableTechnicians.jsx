import React from "react";

const AvailableTechnicians = () => {
  const technicians = [
    {
      name: "Pedro Martinez",
      specialty: "Electricista",
      status: "Disponible",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Tecnicos Disponibles</h2>
      <ul>
        {technicians.map((technician, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={technician.avatar}
                alt={technician.name}
              />
              <div>
                <p className="font-medium">{technician.name}</p>
                <p className="text-sm text-gray-500">
                  {technician.specialty} • {technician.status}
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              Asignar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableTechnicians;
