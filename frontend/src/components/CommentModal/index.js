// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentPage from './commentPage';
import { useEditComment } from "../../context/EditComment";
function CommentModal({commentsNum,allComments,listingId}) {
  const {showCommentModal, setShowCommentModal } = useEditComment();

  return (
    <>
      <button onClick={() => setShowCommentModal(true)}>{commentsNum} reviews</button>
      {showCommentModal && (
        <Modal onClose={() => setShowCommentModal(false)}>
          <CommentPage allComments={allComments} listingId={listingId}/>
        </Modal>
      )}
    </>
  );
}

export default CommentModal;