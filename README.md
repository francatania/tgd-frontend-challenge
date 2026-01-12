# Frontend Challenge - Assets Management

## Overview

This is a frontend challenge designed to evaluate your skills in React, TypeScript, Material UI, and API integration using Axios.

## Objective

You need to implement a complete assets management feature that:

1. Fetches assets data from an API and displays them in a table
2. Adds an "Actions" column with buttons to perform a PUT operation on the API
3. Handles loading and error states appropriately

## Requirements

### Technical Stack

- **React** with TypeScript
- **Material UI** for components and styling
- **Axios** for API calls (configured in `src/shared/libs/axios/axiosInstance.ts`)
- Follow the existing code structure and patterns

### Tasks

1. **API Integration**

   - Implement the `getAssets` function in `src/features/assets/services/assetService.ts` to fetch assets from the API
   - Implement the `updateAsset` function for PUT requests
   - Use the configured `axiosInstance` from `src/shared/libs/axios/axiosInstance.ts`

2. **Data Fetching Hook**

   - Complete the `useAssetsData` hook in `src/features/assets/hooks/useAssetsData.ts`
   - Implement proper loading and error state management
   - Fetch data when the component mounts

3. **Table Component**

   - Complete the `AssetsTable` component in `src/features/assets/components/AssetsTable.tsx`
   - Display loading state while fetching data
   - Display error message if the request fails
   - Render the assets data in the table
   - Add action button in the "Actions" column
   - Implement handlers for PUT operation
   - Update the table after successful PUT operations (refetch data)

4. **Type Definitions**
   - Update the `Asset` and `UpdateAssetDto` interfaces in `src/features/assets/types.ts` based on your API response structure

### API Endpoints

The base URL is already configured in the axios instance: `https://backofficebacktesting.tgdcompany.com/`

You will need to determine the correct endpoints for:

- GET assets: `/api/assets` (example)
- PUT asset: `/api/assets/:id` (example)

## Project Structure

```
src/
├── features/
│   └── assets/
│       ├── components/
│       │   ├── AssetsPageContent.tsx
│       │   └── AssetsTable.tsx
│       ├── hooks/
│       │   └── useAssetsData.ts
│       ├── services/
│       │   └── assetService.ts
│       ├── types/
│       │   └── assetTypes.ts
│       └── index.ts
├── pages/
│   ├── AssetsPage.tsx
│   └── index.ts
├── shared/
│   ├── components/
│   │   └── Container.tsx
│   ├── libs/
│   │   └── axios/
│   │       └── axiosInstance.ts
│   └── theme/
│       └── theme.ts
├── App.tsx
└── main.tsx
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Important Notes

- **Do not create new files or folders** - work with the existing structure
- Follow the existing code patterns and conventions
- Use Material UI components for UI elements
- Handle errors gracefully with appropriate user feedback
- The code should be clean, readable, and maintainable
- All code, comments, and commit messages should be in English

## Evaluation Criteria

- Correct implementation of API calls (GET, PUT)
- Proper state management (loading, error, data)
- Code quality and organization
- User experience (loading states, error handling)
- TypeScript usage and type safety
- Material UI component usage and styling

## Submission

Once completed, make sure your code:

- Compiles without errors
- Follows the existing code structure
- Handles all edge cases (loading, errors, empty states)
- Is ready for review

Good luck!
