import React from "react";

const RecentActivity = () => {
  const activities = [
    {
      user: "Roberto S.",
      action: "completo la tarea \"Reparacion puerta de acceso\"",
      time: "Hace 15 minutos",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Actividad Reciente</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-5 h-5 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <p>
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}
              </p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
