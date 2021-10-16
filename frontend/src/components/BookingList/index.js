// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styles from "./bookingList.module.css";
import { NavLink } from "react-router-dom";
import { createBooking } from "../../store/booking";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { loadBooking } from "../../store/booking";

const BookingList = () => {
  const dispatch = useDispatch();
  const {userId} = useParams()
  let bookings = useSelector((state) => state.booking);
  bookings = Object.values(bookings);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    dispatch(loadBooking(parseInt(userId)));
  }, [dispatch]);

  return (
    <div>
      <table className={styles.listingTable}>
        <thead>
          <tr className={styles.listingRowHead}>
            <th>Listing's Name </th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className={styles.listingRow}>
              <td>{booking?.Listing?.name}</td>
              <td>{new Date(booking?.start_date).toLocaleString("en-US", options)}</td>
              <td>{new Date(booking?.end_date).toLocaleString("en-US", options)}</td>
              <td className={styles.view}><NavLink className={styles.link} to={`/bookings/${booking.id}`} >view</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
