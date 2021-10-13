// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/signupForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import HomeBody from "./components/HomeBody/HomeBody";
import ListingSearchResults from "./components/ListingSearchResults/ListingSearchResults";
import ListingDetails from "./components/ListingDetails/ListingDetails";
import BookingList from "./components/BookingList/BookingList";
import BookingDetails from "./components/BookingDetails/BookingDetails";
import MapContainer from "./components/Maps";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/searchListings">
          <ListingSearchResults />
        </Route>
        <Route exact path="/listings/:listingId">
          <ListingDetails />
          <MapContainer/>
        </Route>
        <Route exact path="/bookings/:bookingId">
          <BookingDetails />
        </Route>
        <Route exact path="/users/:userId/bookings">
          <BookingList />
        </Route>
        <Route>
          <HomeBody />
          {isLoaded && (
            <Switch>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
            </Switch>
          )}
        </Route>
      </Switch>
    </>
  );
}

export default App;
