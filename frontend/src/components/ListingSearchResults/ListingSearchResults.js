// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./homeBody.module.css";
import { NavLink } from "react-router-dom";
import { getListings } from "../../store/listing";

const ListingSearchResults = () => {
  const dispatch = useDispatch();
  const region = localStorage.getItem("region");
  const [listingsAtRegion, setListingAtRegion] = useState([]);
  const listingsObj = useSelector((state) => state.listing);
  const listings = useMemo(() => {
    return Object.values(listingsObj);
  }, [listingsObj]);
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  useEffect(() => {
    const targetListings = [];
    for (const listing of listings) {
      if (listing.Location.city === region) {
        targetListings.push(listing);
      }
    }
    setListingAtRegion(targetListings);
  }, [listings]);

  return (
    <>
      <main>
        <nav>
          {listingsAtRegion.map((listing) => {
            return (
              <NavLink key={listing.name} to={`/listings/${listing.id}`}>
                <div>
                  <div >{listing.name}</div>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </main>
    </>
  );
};

export default ListingSearchResults;
