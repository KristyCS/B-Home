// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import ProfileButton from './index2';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";
import SignupFormModal from '../SignupFormModal';
// import styles from './navigation.module.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const HandlDemoLogin = ()=>{
    dispatch(sessionActions.login({ credential:"Demo-lition", password:"password" }))
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <p className="" onClick={HandlDemoLogin}>Demo User</p>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;