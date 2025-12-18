import React from 'react';

const TaskDetailHeader = () => {
  return (
    <div>
      <p className="text-sm text-gray-500">Tasks  Task #1024</p>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-3xl font-bold">Repair AC Unit in Server Room B</h1>
        <div>
          <button className="px-4 py-2 border rounded-lg mr-2">Edit</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Complete</button>
        </div>
      </div>
      <div className="mt-2">
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">High Priority</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">In Progress</span>
      </div>
    </div>
  );
}

export default TaskDetailHeader;
