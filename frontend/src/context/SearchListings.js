import React, { useContext, useState } from "react";

export const SearchContext = React.createContext();

export const useSearch = () => useContext(SearchContext);

export function SearchProvider(props) {
  const [region, setRegion] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");

  return (
    <SearchContext.Provider
      value={{
        region,
        setRegion,
        start_date,
        setStartDate,
        end_date,
        setEndDate,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
