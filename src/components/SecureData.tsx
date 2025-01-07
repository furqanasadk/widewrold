import React from "react";
import UserCard from "./UserCard";

// Define the types for props
interface SecureDataProps {
  loading: boolean;
  securedata: { name: string; email: string }[];
}

const SecureData: React.FC<SecureDataProps> = ({ loading, securedata }) => {
  return (
    <div className="flex-1 p-4">
      <h1 className="text-lg font-bold mb-5">
        Secure Data fetching from Firebase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {!loading &&
          securedata?.map((item, index) => (
            <UserCard name={item.name} email={item.email} key={index} />
          ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {loading &&
          Array.from({ length: 9 }).map((_, index) => (
            <div
              className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden mb-[10px]"
              key={index}
            >
              <div className="p-6 space-y-4">
                {/* Skeleton  title */}
                <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

                {/* Skeleton  email */}
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>

              {/* Skeleton  button */}
              <div className="flex justify-end p-4 border-t">
                <div className="px-4 py-2 bg-gray-300 rounded-md w-32 animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecureData;
