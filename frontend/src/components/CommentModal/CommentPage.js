// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import CommentRow from "../CommentRow/CommentRow";
import { useEditComment } from "../../context/EditComment";
import {
    createComment,
    editComment,
  } from "../../store/comment";
function CommentPage({allComments,listingId}) {
  const dispatch = useDispatch();
  const { edit, commentId, setEdit, commentToBeEdit } = useEditComment();
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const [comments, setComments] = useState();
  const submitComment = async (e) => {
    e.preventDefault();
    if (!sessionUser) {
      setShowModal(true);
    } else {
      const payload = {
        user_id: sessionUser.id,
        listing_id: parseInt(listingId, 10),
        comments,
      };
      await dispatch(createComment(payload));
      setComments("");
    }
  };

  const editCommentHandler = async (e) => {
    e.preventDefault();
    if (!sessionUser) {
      setShowModal(true);
    } else {
      const payload = {
        id: parseInt(e.target.id, 10),
        user_id: sessionUser.id,
        listing_id: parseInt(listingId, 10),
        comments,
      };
      await dispatch(editComment(payload));
      setComments("");
      setEdit(false);
    }
  };
  return (
    <>
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
              required
              placeholder="Add your entry"
              onChange={(e) => setComments(e.target.value)}
            />
            <button type="submit">submit</button>{" "}
          </form>
        )}
        {edit && (
          <form id={commentId} onSubmit={editCommentHandler}>
            <textarea
              required
              value={comments}
              placeholder={commentToBeEdit}
              required
              onChange={(e) => setComments(e.target.value)}
            />
            <button type="submit">edit</button>
          </form>
        )}
      </div>
    </>
  );
}

export default CommentPage;
