import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileHeader from '../components/UserProfile/ProfileHeader';
import UserProfileCard from '../components/UserProfile/UserProfileCard';
import UserPerformance from '../components/UserProfile/UserPerformance';
import PersonalInformation from '../components/UserProfile/PersonalInformation';
import SecuritySettings from '../components/UserProfile/SecuritySettings';
import UserActivity from '../components/UserProfile/UserActivity';

const UserProfile = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <ProfileHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <UserProfileCard />
              <UserPerformance />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <PersonalInformation />
              <SecuritySettings />
              <UserActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
