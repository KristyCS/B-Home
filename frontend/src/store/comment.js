import { csrfFetch } from "./csrf";
const ADD_ONE = "comment/ADD_ONE";
const LOAD_BY_LISTING_ID = "comment/LOADBYLISTING";

const REMOVE_COMMENT = "comment/REMOVE";

const loadComments = (comments) => ({
  type: LOAD_BY_LISTING_ID,
  comments,
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

const addOneComment = (comment) => ({
  type: ADD_ONE,
  comment,
});

export const deleteComment = (commentId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${commentId}`, {
    method: "delete",
  });
  if (response.ok) {
    dispatch(removeComment(commentId));
  }
};

export const loadCommentsByListingId = (listing_id) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/${listing_id}/reviews`);
  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments));
    return comments;
  }
};

export const createComment = (data) => async (dispatch) => {
  console.log(data);
  const response = await csrfFetch(`/api/reviews`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const comment = await response.json();
    dispatch(addOneComment(comment));
    return comment;
  }
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BY_LISTING_ID: {
      const newState = { ...state };
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    }
    case ADD_ONE: {
      const newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    }
    case REMOVE_COMMENT: {
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    }
    default:
      return state;
  }
};

export default commentsReducer;
