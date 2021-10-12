// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./HomeBody.module.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getListings } from "../../store/listing";
import { useSearch } from "../../context/SearchListings";
import { useListing } from "../../context/Listings";
const ListingDetails = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const { listings } = useListing();
  const listingArray = Object.values(listings);
  console.log(listingArray, "%%%");
  console.log(listingId, "%%%");
  let listing;
  for (const l of listingArray) {
    if (l.id === listingId) {
      listing = l;
    }
  }

  const book = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <form onSubmit={book}>
        <button type="submit"> BOOK!</button>
      </form>
      <label> Name </label>
      <p> {listing.name}</p>
      <label> Description </label>
      <p> {listing.description} </p>
    </div>
  );
};

export default ListingDetails;
