import { deleteComment } from "../../store/comment";
import { useEditComment } from "../../context/EditComment";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useEffect, useState } from "react";
import styles from "./commentRow.module.css";
const CommentRow = ({ singlecomment }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { setEdit, setCommentId, setCommentToBeEdit } = useEditComment();
  useEffect(() => {
    dispatch(sessionActions.restoreUser());
  }, [dispatch]);
  const editHandler = () => {
    setEdit(true);
    setCommentId(singlecomment.id);
    setCommentToBeEdit(singlecomment.comments);
  };
  const deleteHandler = (e) => {
    dispatch(deleteComment(e.target.id));
  };
  return (
    <ul className={styles.singleCommentContainer}>
      <li>user: {singlecomment?.User?.username}</li>
      <li>comment: {singlecomment?.comments}</li>
      {sessionUser?.id === singlecomment?.user_id && (
        <div className={styles.buttons}>
          <p className={styles.editButton} id={singlecomment?.id} onClick={editHandler}>
            edit
          </p>
          <p className={styles.deleteButton} id={singlecomment?.id} onClick={deleteHandler}>
            delete
          </p>
        </div>
      )}
    </ul>
  );
};

export default CommentRow;
