import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comment";
import { useEditComment } from "../../context/EditComment";
import styles from "./singleListingSearchResult.module.css"
import { useHistory } from "react-router";
const SingleListingSearchResult = ({ listing }) => {
const history = useHistory();
const clickImage =(listingId)=>{
     history.push(`/listings/${listingId}`)
}
  return (
      <div className={styles.singleListing}>
         <img onClick={()=>{clickImage(listing?.id)}} src={listing?.Images[0].img_url} />
         <div className={styles.description}>
           <p>{listing?.Location.city},{listing?.Location.state}</p>
           <p>{listing?.price}/night</p>
         </div>
      </div>)
};

export default SingleListingSearchResult;
