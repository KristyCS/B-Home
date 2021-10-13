import React, { useContext, useState } from "react";

export const EditCommentContext = React.createContext();

export const useEditComment = () => useContext(EditCommentContext);

export function EditCommentProvider(props) {
  const [edit, setEdit] = useState(false);
  const [commentId, setCommentId] = useState(0);
  return (
    <EditCommentContext.Provider
      value={{
        edit,
        setEdit,
        commentId,
        setCommentId,
      }}
    >
      {props.children}
    </EditCommentContext.Provider>
  );
}
