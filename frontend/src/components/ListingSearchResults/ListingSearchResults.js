// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./homeBody.module.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getListings } from "../../store/listing";
import { useSearch } from "../../context/SearchListings";
const ListingSearchResults = () => {
  const dispatch = useDispatch();
  const { region } = useSearch();
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
                  {/* <div
                    className="nav-entry-image"
                    style={{ backgroundImage: `url('${listing.Image.}')` }}
                  ></div> */}
                  <div>
                    <div className="primary-text">{listing.name}</div>
                    
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
