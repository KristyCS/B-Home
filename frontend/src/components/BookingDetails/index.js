import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styles from "./bookingDetails.module.css";
import * as sessionActions from "../../store/session";
import { loadOneBooking, deleteBooking } from "../../store/booking";
const BookingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bookingId } = useParams();

  const userId = useSelector((state) => state.session?.user?.id);
  const bookingdetail = useSelector((state) => state.booking[bookingId]);
  const sd = new Date(bookingdetail?.start_date);
  const ed =new Date(bookingdetail?.end_date);
  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(loadOneBooking(parseInt(bookingId, 10)));
  }, [dispatch]);

  const deleteHandler = () => {
    dispatch(deleteBooking(parseInt(bookingId, 10)));
    history.push(`/users/${userId}/bookings`);
  };
  return (
    <div>
      <div className={styles.singleBooking}>
        <h3> Booking Detail </h3>
        <div className={styles?.title}><p>Listing Name</p></div>
        <div className={styles?.content}><p>{bookingdetail?.Listing?.name}</p></div>
        <div className={styles?.title}><p>Start Date</p></div>
        <div className={styles?.content}><p>{sd.getMonth()}/{sd.getDate()}/{sd.getFullYear()}</p></div>
        <div className={styles?.title}><p>End Date</p></div>
        <div className={styles?.content}><p>{ed.getMonth()}/{ed.getDate()}/{ed.getFullYear()}</p></div>
        <div className={styles?.title}><p>Price</p></div>
        <div className={styles?.content}><p>${bookingdetail?.price}.00</p></div>
        <button onClick={deleteHandler}> Delete </button>
      </div>
    </div>
  );
};

export default BookingDetails;
