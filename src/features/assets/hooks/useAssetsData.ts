import { getAssets } from "../services/assetService";
import type { Asset } from "../types/assetTypes";
import { useState, useEffect } from "react";

const useAssetsData = () => {
  const [data, setData] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // TODO: Implement the fetch logic using getAssets service
  // Set loading states, handle errors, and update data

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result: Asset[] = await getAssets();
      setData(result);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("Unknown error."));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData
  };
};

export default useAssetsData;
