// Import hooks from 'react'. Which hook is meant for causing side effects?
import { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { createBooking } from "../../store/booking";
import { getListings} from "../../store/listing";
import { createComment,loadCommentsByListingId } from "../../store/comment";
import { useSearch } from "../../context/SearchListings";
const ListingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const listingsObj = useSelector((state) => state.listing);
  
  const [comments, setComments] = useState();
  const listings = useMemo(()=>{
    return Object.values(listingsObj)
  },[listingsObj]);
  useEffect(()=>{
     dispatch(getListings());
     dispatch(loadCommentsByListingId(parseInt(listingId, 10)))
  },[dispatch]);

  
  let currentListing = null;
  for (const l of listings) {
    if (l.id === parseInt(listingId, 10)) {
      currentListing = l;
    }
  }
  const { start_date, end_date } = useSearch();
  const submitComment = async (e) =>{
    e.preventDefault();
    const payload = {
      user_id: sessionUser.id,
      listing_id: parseInt(listingId, 10),
      comments
    };
    await dispatch(createComment(payload));

  }
  const book = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: sessionUser.id,
      listing_id: parseInt(listingId, 10),
      start_date,
      end_date,
      price: 100,
    };
    const booking = await dispatch(createBooking(payload));
    if (booking) {
      history.push("/");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={book}>
          <button type="submit"> BOOK!</button>
        </form>
        <label> Name </label>
        <p> {currentListing.name}</p>
        <label> Description </label>
        <p> {currentListing.description} </p>
      </div>
      <div>
      <form onSubmit={submitComment}>
        <textarea value={comments} onChange={(e)=>setComments(e.target.value)}></textarea>
        <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default ListingDetails;
