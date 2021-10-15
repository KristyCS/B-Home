// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect } from "react";
// Import hooks from 'react-redux'
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./HomeBody.module.css";
import * as sessionActions from "../../store/session";
import { loadOneBooking,loadBooking, deleteBooking } from "../../store/booking";
const BookingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const  { bookingId } = useParams();

  const userId = useSelector((state) => state.session?.user?.id);
  const bookingdetail = useSelector((state) => state.booking[bookingId]);

  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    // dispatch(loadBooking(parseInt(userId, 10)));
    dispatch(loadOneBooking(parseInt(bookingId, 10)));
  }, [dispatch]);

  const deleteHandler = () => {
    dispatch(deleteBooking(parseInt(bookingId, 10)));
    history.push(`/users/${userId}/bookings`);
  };
  return (
    <>
      <div>{bookingdetail?.Listing?.summary}</div>
      <button onClick={deleteHandler}> Delete </button>
    </>
  );
};

export default BookingDetails;
