// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Favicon from 'react-favicon'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { SearchProvider } from "./context/SearchListings";
import {  EditCommentProvider } from "./context/EditComment";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <EditCommentProvider>
        <SearchProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchProvider>
        </EditCommentProvider>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  
  <React.StrictMode>
    <Root ><div>
    <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' />
    <h1>Hello, Favicon!</h1>
  </div></Root>
  </React.StrictMode>,
  document.getElementById("root")
);
