// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./HomeBody.module.css";
import { NavLink } from "react-router-dom";
import { createBooking } from "../../store/booking";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { loadBooking } from "../../store/booking";

const BookingList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  let bookings = useSelector((state) => state.booking);
  bookings = Object.values(bookings);
  useEffect(() => {
    dispatch(loadBooking(parseInt(userId, 10)));
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Listing's Name </th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr>
              <td>{booking?.Listing?.name}</td>
              <td>{booking?.start_date}</td>
              <td>{booking?.end_date}</td>
              <td><NavLink to={`/bookings/${booking.id}`} >view</NavLink></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
