import React from 'react';
import Sidebar from '../components/Sidebar';
import GestionTablasHeader from '../components/GestionTablasHeader';
import FilterBar from '../components/FilterBar';
import RecentTasks from '../components/RecentTasks';
import Summary from '../components/Summary';
import AvailableTeam from '../components/AvailableTeam';
import NextDueDate from '../components/NextDueDate';

const GestionTablas = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <GestionTablasHeader />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <FilterBar />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentTasks />
            </div>
            <div className="space-y-6">
              <Summary />
              <AvailableTeam />
              <NextDueDate />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GestionTablas;
