"use client";
import { useSearchParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "./hooks/useStore";

const Vendors = () => {
  const searchParams = useSearchParams();
  const [storeId, setStoreId] = useState<string | null>(null);
  const { data, isLoading, isError } = useStore(storeId);

  useEffect(() => {
    const id = searchParams.get("vendor");
    setStoreId(id);
  }, [searchParams]);

  if (isError) {
    notFound();
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      {/* Add more store details here */}
    </div>
  );
};

export default Vendors;
