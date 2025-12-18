import React from "react";

const SummaryCard = ({ title, value, percentage, change, icon, color }) => {
  return (
    <div className={`p-4 bg-white rounded-md shadow-md flex-1 mx-2`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className={`text-sm ${color}`}>
            {percentage && (
              <span className={`mr-2 ${color}`}>{percentage}</span>
            )}
            {change}
          </p>
        </div>
        <div className={`p-2 rounded-full bg-opacity-25 ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
