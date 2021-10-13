import React, { useContext, useState } from "react";

export const EditCommentContext = React.createContext();

export const useEditComment = () => useContext(EditCommentContext);

export function EditCommentProvider(props) {
  const [edit, setEdit] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const [commentToBeEdit, setCommentToBeEdit] = useState("");
  return (
    <EditCommentContext.Provider
      value={{
        edit,
        setEdit,
        commentToBeEdit,
        setCommentToBeEdit,
        commentId,
        setCommentId,
      }}
    >
      {props.children}
    </EditCommentContext.Provider>
  );
}
