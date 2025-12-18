import React from 'react';

const TaskInfo = () => {
  return (
    <div className="grid grid-cols-4 gap-6 text-sm">
      <div>
        <p className="text-gray-500">ASSIGNEE</p>
        <div className="flex items-center mt-2">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Assignee" className="w-8 h-8 rounded-full mr-2"/>
          <p className="font-semibold">Juan Pérez</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500">DUE DATE</p>
        <p className="font-semibold mt-2">Oct 26, 2023</p>
      </div>
      <div>
        <p className="text-gray-500">LOCATION</p>
        <p className="font-semibold mt-2">Building A, Floor 2</p>
      </div>
      <div>
        <p className="text-gray-500">CATEGORY</p>
        <p className="font-semibold mt-2">HVAC Maintenance</p>
      </div>
    </div>
  );
}

export default TaskInfo;
