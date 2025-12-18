import React from 'react';

const comments = [
    {
        author: 'System',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        text: 'created this task automatically from alert #ERR-502.',
        time: 'Oct 24, 9:00 AM'
    },
    {
        author: 'Maria Garcia',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
        text: 'I\'ve notified the external vendor. They said they can send a technician tomorrow morning. Should I approve the overtime cost?',
        time: 'Oct 24, 10:30 AM'
    },
    {
        author: 'Juan Pérez',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        text: 'Yes, please approve it. We can\'t have the server room overheating over the weekend. I\'m heading there now to do a preliminary check.',
        time: '10 mins ago'
    },
];

const ActivityComments = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Activity & Comments</h2>
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex">
            <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-600">{comment.text}</p>
              <p className="text-xs text-gray-400 mt-1">{comment.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <textarea placeholder="Add a comment..." className="w-full border-gray-300 rounded-lg"></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg float-right">Send</button>
      </div>
    </div>
  );
}

export default ActivityComments;
