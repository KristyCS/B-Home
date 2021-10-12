import React, { useContext, useState } from "react";

export const ListingContext = React.createContext();

export const useListing = () => useContext(ListingContext);

export function ListingProvider(props) {
  const [listings, setListings] = useState([]);

  return (
    <ListingContext.Provider
      value={{
        listings,
        setListings
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
}
