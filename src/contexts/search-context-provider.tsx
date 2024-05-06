"use client";

import { createContext, useState } from "react";

type searchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
};

export const searchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: searchContextProviderProps) {
  // state
  const [searchQuery, setSearchQuery] = useState("");

  // derived state

  // events
  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <searchContext.Provider value={{ searchQuery, handleChangeSearchQuery }}>
      {children}
    </searchContext.Provider>
  );
}
