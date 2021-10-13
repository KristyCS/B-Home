import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comment";
import { useEditComment } from "../../context/EditComment";
const CommentRow = ({ singlecomment }) => {
  const dispatch = useDispatch();
  const {setEdit,setCommentId,setCommentToBeEdit} = useEditComment();
  const editHandler = () => {
    setEdit(true);
    setCommentId(singlecomment.id);
    setCommentToBeEdit(singlecomment.comments);
  };
  const deleteHandler = (e) => {
    dispatch(deleteComment(e.target.id));
  }
  return (
    <ul>
      <li>{singlecomment?.User?.username}</li>
      <li>{singlecomment?.comments}</li>
      <li id={singlecomment?.id} onClick={editHandler}>
        edit
      </li>
      <li id={singlecomment?.id} onClick={deleteHandler}>
        delete
      </li>
    </ul>
  );
};

export default CommentRow;
