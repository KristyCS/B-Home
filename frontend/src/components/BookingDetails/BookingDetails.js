// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./HomeBody.module.css";
import { NavLink } from "react-router-dom";
import { createBooking } from "../../store/booking";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import { loadBooking,deleteBooking } from "../../store/booking";
const BookingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { bookingId } = useParams();
  bookingId = parseInt(bookingId, 10);
  const userId = useSelector((state) => state.session.user.id);
  let bookings = useSelector((state) => state.booking);
  const bookingsArray = Object.values(bookings);

  useEffect(() => {
    dispatch(loadBooking(parseInt(userId, 10)));
  }, [dispatch]);
  let bookingdetail = {};
  for (const booking of bookingsArray) {
    if (booking.id === bookingId) {
      bookingdetail = booking;
    }
  }

  const deleteHandler = () => {
      dispatch(deleteBooking(bookingId));
      history.push('/users/userId/bookings')
  };
  return (
    <>
      <div>{bookingdetail.Listing.summary}</div>
      <button
        onClick={deleteHandler}
      >
        {" "}
        Delete{" "}
      </button>
    </>
  );
};

export default BookingDetails;
