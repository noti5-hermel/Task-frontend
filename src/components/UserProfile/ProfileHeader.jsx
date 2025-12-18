import React from 'react';

const ProfileHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="w-1/3">
        <input type="search" placeholder="Buscar tareas, usuarios..." className="w-full px-4 py-2 border rounded-lg"/>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  )
}

export default ProfileHeader;
