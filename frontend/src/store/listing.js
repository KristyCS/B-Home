// Define Action Types as Constants
const LOAD_LISTINGS = 'listings/loadListings';

// Define Action Creators
const loadListings = (listings) => ({
  type: LOAD_LISTINGS,
  listings,
});

// Define Thunks
export const getListings = () => async (dispatch) => {
  const response = await fetch('/api/listings');
  const listings = await response.json();
  dispatch(loadListings(listings));
};

// Define an initial state
const initialState = {};

// Define a reducer
const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTINGS:
      const newState = { ...state };
      action.listings.forEach(listing => {
        newState[listing.id] = listing;
      });
      return newState;
    default:
      return state;
  }
};

// Export the reducer
export default listingsReducer;
