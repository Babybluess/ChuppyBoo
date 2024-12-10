"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { slideData } from "../const/data";

// Define the shape of the context
interface DataContextType {
  data: any; // Replace `any` with the appropriate type of your data
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: string | null;
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a custom hook to access the context
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

// Define the Provider's props
interface DataProviderProps {
  children: ReactNode;
  initialUrl: string; // Allow dynamic fetch URL if needed
}

// Create the Provider component
export const DataProvider: React.FC<DataProviderProps> = ({
  children,
  initialUrl,
}) => {
  const [data, setData] = useState<any>(slideData); // Replace `any` with the correct data type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Home");

  // Fetch data when the provider is initialized
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        setData(slideData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialUrl]);

  return (
    <DataContext.Provider value={{ data, activeTab, setActiveTab, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
