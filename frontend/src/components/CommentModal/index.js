// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentPage from './commentPage';
import styles from "./commentModal.module.css"
import { useEditComment } from "../../context/EditComment";
function CommentModal({commentsNum,allComments,listingId}) {
  const {showCommentModal, setShowCommentModal } = useEditComment();

  return (
    <>
      <a className={styles.review}onClick={() => setShowCommentModal(true)}>{commentsNum} reviews</a>
      {showCommentModal && (
        <Modal onClose={() => setShowCommentModal(false)}>
          <CommentPage allComments={allComments} listingId={listingId}/>
        </Modal>
      )}
    </>
  );
}

export default CommentModal;