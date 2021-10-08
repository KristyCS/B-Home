import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from './home.module.css';
function Home() {
  return (
    <div className={styles.main}>
      <img src={"https://pix6.agoda.net/city/9254/9254-7x3.jpg?s=1920x"} />
    </div>
  );
}

export default Home;
