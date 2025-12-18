import React from 'react';

const TaskAttachments = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Attachments</h2>
      <div className="grid grid-cols-3 gap-4">
        <img src="https://i.imgur.com/3Y3jXfQ.png" alt="Attachment 1" className="rounded-lg"/>
        <img src="https://i.imgur.com/O3i5b8W.png" alt="Attachment 2" className="rounded-lg"/>
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl text-gray-400">+</p>
            <p className="text-gray-500">Add Photo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskAttachments;
