import { GetServerSideProps } from "next";
import { firestore } from "./api/admin/firebase";
import TabList from "@/components/TabList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SecureData from "@/components/SecureData";

interface SecureDataItem {
  name: string;
  email: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const collectionName = query.list === "list2" ? "employees" : "users";
  let secureData: SecureDataItem[] = [];
  const snapshot = await firestore.collection(collectionName).get();
  secureData = snapshot.docs.map((doc) => doc.data() as SecureDataItem);
  console.log(secureData);
  return {
    props: { secureData },
  };
};

type HomePageProps = {
  secureData: SecureDataItem[];
};

export default function HomePage({ secureData }: HomePageProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [securedata, setSecureData] = useState<SecureDataItem[]>([]);

  useEffect(() => {
    if (secureData.length > 0) {
      setLoading(false);
      setSecureData(secureData);
    }
  }, [secureData]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-4 border-r border-gray-300">
        <TabList setSecureData={setSecureData} setLoading={setLoading} />
      </div>
      <SecureData securedata={securedata} loading={loading} />
    </div>
  );
}
