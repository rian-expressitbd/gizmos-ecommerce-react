import React from 'react'


type CommentProps = {
    name: string;
    date: string;
    text: string;
    imageUrl: string;
  };

const Comment: React.FC<CommentProps> = ({ name, date, text, imageUrl }) => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6 flex gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <div className="text-xs text-gray-400 mb-1">{date}</div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm mt-1">{text}</p>
          <button className="mt-2 text-xs font-semibold text-blue-600 flex items-center gap-1 hover:underline">
            Reply To
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  export default Comment