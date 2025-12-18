import React from 'react';
import TaskHeader from './TaskHeader';
import TaskInfo from './TaskInfo';
import TaskDescription from './TaskDescription';
import TaskAttachments from './TaskAttachments';
import ActivityComments from './ActivityComments';
import AvailableTechnicians from './AvailableTechnicians';

const TaskDetail = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-2/3 p-8 overflow-y-auto">
        <TaskHeader />
        <TaskInfo />
        <TaskDescription />
        <TaskAttachments />
      </div>
      <div className="w-1/3 p-8 bg-white border-l border-gray-200 overflow-y-auto">
        <ActivityComments />
        <AvailableTechnicians />
      </div>
    </div>
  );
}

export default TaskDetail;
