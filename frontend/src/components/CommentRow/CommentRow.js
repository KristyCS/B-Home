import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comment";
import { useEditComment } from "../../context/EditComment";
const CommentRow = ({ singlecomment }) => {
  const dispatch = useDispatch();
  const {setEdit,setCommentId} = useEditComment();
  const editHandler = (e) => {
    setEdit(true);
    setCommentId(e.target.id)
  };
  const deleteHandler = (e) => {
    dispatch(deleteComment(e.target.id));
  }
  return (
    <tr>
      <td>{singlecomment.User.username}</td>
      <td>{singlecomment.comments}</td>
      <td id={singlecomment.id} onClick={editHandler}>
        edit
      </td>
      <td id={singlecomment.id} onClick={deleteHandler}>
        delete
      </td>
    </tr>
  );
};

export default CommentRow;
