// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentPage from './CommentPage';

function CommentModal({commentsNum,allComments,listingId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>{commentsNum} reviews</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentPage allComments={allComments} listingId={listingId}/>
        </Modal>
      )}
    </>
  );
}

export default CommentModal;