import React from 'react';
import MaintenanceSidebar from '../components/MaintenanceSidebar';
import AppHeader from '../components/AppHeader';
import TaskDetailHeader from '../components/TaskDetail/TaskDetailHeader';
import TaskInfo from '../components/TaskDetail/TaskInfo';
import TaskDescription from '../components/TaskDetail/TaskDescription';
import TaskAttachments from '../components/TaskDetail/TaskAttachments';
import ActivityComments from '../components/TaskDetail/ActivityComments';

const TaskDetail = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <MaintenanceSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <div className="flex flex-1">
          <main className="flex-1 p-6 overflow-y-auto">
            <TaskDetailHeader />
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <TaskInfo />
              <TaskDescription />
              <TaskAttachments />
            </div>
          </main>
          <aside className="w-96 bg-white p-6 border-l border-gray-200 overflow-y-auto">
            <ActivityComments />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
