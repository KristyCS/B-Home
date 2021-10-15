import { csrfFetch } from "./csrf";
const ADD_ONE = "booking/ADD_ONE";
const LOAD = "booking/LOAD_BY_USER_ID";
const REMOVE_BOOKING = 'booking/REMOVE';

const loadBookingsByUserId = (bookings) => ({
  type: LOAD,
  bookings,
});

const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId
});

const addOneBooking = (booking) => ({
  type: ADD_ONE,
  booking,
});

export const deleteBooking = (bookingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: 'delete'
  });
  if (response.ok) {
    dispatch(removeBooking(bookingId));
  }
};

export const loadBooking = (user_id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${user_id}/bookings`);
  if (response.ok) {
    const bookings = await response.json();
    dispatch(loadBookingsByUserId(bookings));
    return bookings;
  }
};

export const loadOneBooking =(bookingId) =>async(dispatch)=>{
  const response = await csrfFetch(`/api/bookings/${bookingId}`);
  if (response.ok) {
    const booking = await response.json();
    dispatch(addOneBooking(booking));
    return booking;
  }
}


export const createBooking = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const booking = await response.json();
    dispatch(addOneBooking(booking));
    return booking;
  }
};

const initialState = {};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const newState = { ...state };
      action.bookings.forEach((booking) => {
        newState[booking.id] = booking;
      });
      return newState;
    }
    case ADD_ONE: {
      const newState = { ...state};
      newState[action.booking.id] = action.booking;
      return newState;
    }
    case REMOVE_BOOKING:{
      const newState = { ...state };
      delete newState[action.bookingId];
      return newState;
    }
    default:
      return state;
  }
};

export default bookingReducer;
