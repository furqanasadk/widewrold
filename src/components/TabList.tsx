"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
interface TabListProps {
  setSecureData: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function TabList({ setSecureData, setLoading }: TabListProps) {
  const router = useRouter();
  const { query } = router;

  const initialTab = query.tab || "list1";

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(query.list || "list1");
  }, [query.list]);
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setLoading(true);
    setSecureData([]);
    router.push(`/?list=${tab}`);
  };

  return (
    <div>
      <div className="flex space-x-4 ">
        <button
          className={`w-[150px] p-2 ${
            activeTab === "list1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("list1")}
        >
          User
        </button>
        <button
          className={`w-[150px] p-2 ${
            activeTab === "list2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabChange("list2")}
        >
          Employee
        </button>
      </div>
    </div>
  );
}
