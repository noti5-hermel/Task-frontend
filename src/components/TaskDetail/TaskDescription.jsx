import React from 'react';

const TaskDescription = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">Description</h2>
      <p className="text-gray-600">
        The server room cooling unit (AC-204) has been reported to make a loud rattling noise during operation. Additionally, the temperature sensors in the room indicate a rise of 5 degrees above the optimal threshold over the last 48 hours.
      </p>
      <p className="text-gray-600 mt-4">
        Please inspect the compressor and fan belts. Ensure filters are clean and check coolant levels.
      </p>
    </div>
  );
}

export default TaskDescription;
