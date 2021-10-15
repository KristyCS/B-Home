// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { createBooking } from "../../store/booking";
import { getListings } from "../../store/listing";
import CommentModal from "../CommentModal";
import { loadCommentsByListingId } from "../../store/comment";
import * as sessionActions from "../../store/session";
import LoginForm from "../LoginFormModal/LoginForm.js";
import { Modal } from "../../context/Modal";
import styles from "./ListingDetails.module.css";
import { useEditComment } from "../../context/EditComment";
const ListingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { showLoginModal, setShowLoginModal } = useEditComment();
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const currentListing = useSelector((state) => state.listing[listingId]);
  const allComments = useSelector((state) => Object.values(state.comments));
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(getListings());
    dispatch(loadCommentsByListingId(parseInt(listingId, 10)));
  }, [dispatch]);
  localStorage.setItem("lat", currentListing?.Location.latitude);
  localStorage.setItem("lng", currentListing?.Location.longtitude);

  const book = async (e) => {
    e.preventDefault();
    if (!sessionUser) {
      setShowLoginModal(true);
    } else {
      const start_date = localStorage.getItem("start_date");
      const end_date = localStorage.getItem("end_date");
      const payload = {
        user_id: sessionUser.id,
        listing_id: parseInt(listingId, 10),
        start_date,
        end_date,
        price: 100,
        // currentListing?.price * ((new Date(end_date)).getDate() - (new Date(start_date)).getDate()),
      };
      let booking;
      const response = await dispatch(createBooking(payload)).catch(
        async (res) => {
          booking = await res.json();
          if (booking.errors.length) {
            setErrors(booking.errors);
          }
        }
      );
      if (response) {
        history.push(`/users/${sessionUser.id}/bookings`);
      }
    }
  };

  return (
    <>
      {" "}
      <div>
        {showLoginModal && (
          <Modal onClose={() => setShowLoginModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className={styles.title}>
        <h2> {currentListing?.name}</h2>
        <button
          className={styles.bookButton}
          onClick={(e) => {
            book(e);
          }}
          type="submit"
        >
          BOOK!
        </button>
      </div>
      <div>
        <CommentModal
          commentsNum={allComments.length}
          allComments={allComments}
          listingId={listingId}
        />
      </div>
      <div className={styles.imageShow}>
        {currentListing?.Images.map((singleImage) => (
          <img key={singleImage.id} src={singleImage.img_url} />
        ))}
      </div>
      <div className={styles.info}>
        <h3>
          Entire {currentListing?.property_type} hosted by{" "}
          {currentListing?.Host.name}
        </h3>
        <p>
          {currentListing?.accommodates} guests ·{" "}
          {currentListing?.property_type} · {currentListing?.beds}beds ·{" "}
          {currentListing?.bathrooms}bath
        </p>
        <label> Description </label>
        <p> {currentListing?.description} </p>
      </div>
      <div>
        <h3>What this place offers </h3>
      </div>
    </>
  );
};

export default ListingDetails;
