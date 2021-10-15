import { deleteComment } from "../../store/comment";
import { useEditComment } from "../../context/EditComment";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useEffect, useState } from "react";

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
    <ul>
      <li>{singlecomment?.User?.username}</li>
      <li>{singlecomment?.comments}</li>
      {sessionUser?.id === singlecomment?.user_id && (
        <>
          <li id={singlecomment?.id} onClick={editHandler}>
            edit
          </li>
          <li id={singlecomment?.id} onClick={deleteHandler}>
            delete
          </li>
        </>
      )}
    </ul>
  );
};

export default CommentRow;
