// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState} from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { createBooking } from "../../store/booking";
import { getListings } from "../../store/listing";
import {
  createComment,
  loadCommentsByListingId,
  editComment,
} from "../../store/comment";
import * as sessionActions from "../../store/session";
import { useSearch } from "../../context/SearchListings";
import CommentRow from "../CommentRow/CommentRow";
import { useEditComment } from "../../context/EditComment";
const ListingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { edit, commentId, setEdit,commentToBeEdit } = useEditComment();
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const currentListing = useSelector((state) => state.listing[listingId]);
  const allComments = useSelector((state) => Object.values(state.comments));
  const [comments, setComments] = useState();
  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(getListings());
    dispatch(loadCommentsByListingId(parseInt(listingId, 10)));
  }, [dispatch]);
  
   localStorage.setItem("lat",currentListing?.Location.latitude);
   localStorage.setItem("lng",currentListing?.Location.longtitude);

  
  const submitComment = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: sessionUser.id,
      listing_id: parseInt(listingId, 10),
      comments,
    };
    await dispatch(createComment(payload));
    setComments("");
  };

  const editCommentHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.id, "&&&&&&");
    const payload = {
      id: parseInt(e.target.id, 10),
      user_id: sessionUser.id,
      listing_id: parseInt(listingId, 10),
      comments,
    };
    await dispatch(editComment(payload));
    setComments("");
    setEdit(false);
  };
  const book = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: sessionUser.id,
      listing_id: parseInt(listingId, 10),
      start_date:new Date(localStorage.getItem("start_date")),
      end_date:new Date(localStorage.getItem("end_date")),
      price: 100,
    };
    const booking = await dispatch(createBooking(payload));
    if (booking) {
      history.push("/");
    }
  };
  
  return (
    <>
    {/* { localStorage.setItem("lat",currentListing?.Location?.latitude)} */}
      <div>
        <form onSubmit={book}>
          <button type="submit"> BOOK!</button>
        </form>
        <label> Name </label>
        <p> {currentListing?.name}</p>
        <label> Description </label>
        <p> {currentListing?.description} </p>
      </div>
      <div>
        {allComments.map((singlecomment) => (
          <CommentRow key={singlecomment.id} singlecomment={singlecomment} />
        ))}
      </div>
      <div>
        {!edit && (
          <form onSubmit={submitComment}>
            <textarea
              value={comments}
              placeholder="Add your entry"
              onChange={(e) => setComments(e.target.value)}
            />
            <button type="submit">submit</button>{" "}
          </form>
        )}
        {edit && (
          <form id={commentId} onSubmit={editCommentHandler}>
            <textarea
              value={comments}
              placeholder={commentToBeEdit}
              onChange={(e) => setComments(e.target.value)}
            />
            <button type="submit">edit</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ListingDetails;
