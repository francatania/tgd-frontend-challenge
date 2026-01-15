import { axiosInstance } from "@/shared/libs/axios";
import type { Asset, UpdateAssetDto } from "../types/assetTypes";

export const getAssets = async (): Promise<Asset[]> => {
  const response = await axiosInstance.get<Asset[]>("/equipment");
  return response.data;
};

export const updateAsset = async (data: UpdateAssetDto): Promise<Asset> => {
  const response = await axiosInstance.put<Asset>("/equipment", data);
  return response.data;
};
