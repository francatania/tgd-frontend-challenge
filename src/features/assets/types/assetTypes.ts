export interface Asset {
  id: string;
  name: string;
  // Add more fields as needed based on your API response
}

export interface UpdateAssetDto {
  name?: string;
  // Add more fields as needed
}
