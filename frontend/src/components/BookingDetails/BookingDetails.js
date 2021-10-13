// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./HomeBody.module.css";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { createBooking } from "../../store/booking";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import { loadBooking, deleteBooking } from "../../store/booking";
const BookingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { bookingId } = useParams();

  const userId = useSelector((state) => state.session.user.id);
  let bookingdetail = useSelector((state) => state.booking[bookingId]);

  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(loadBooking(parseInt(userId, 10)));
  }, [dispatch]);

  const deleteHandler = () => {
    dispatch(deleteBooking(parseInt(bookingId, 10)));
    history.push("/users/userId/bookings");
  };
  return (
    <>
      <div>{bookingdetail.Listing.summary}</div>
      <button onClick={deleteHandler}> Delete </button>
    </>
  );
};

export default BookingDetails;
