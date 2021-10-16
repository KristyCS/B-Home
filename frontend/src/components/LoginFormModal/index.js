// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './loginForm';
import styles from "./loginFormModal.module.css"
function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.navLogin} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;