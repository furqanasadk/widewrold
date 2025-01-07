import React from "react";

const UserCard = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden mb-[10px]">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      <div className="flex justify-end p-4 border-t">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Contact
        </button>
      </div>
    </div>
  );
};

export default UserCard;
