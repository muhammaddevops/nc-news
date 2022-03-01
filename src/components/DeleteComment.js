import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/api";

const DeleteComment = (comment_id) => {
  const handleDelete = () => {
    console.log(comment_id);
    deleteComment(comment_id).then((res) => {
      console.log(res);
    });
  };

  return (
    <button className="button" onClick={handleDelete}>
      Delete
    </button>
  );
};
export default DeleteComment;
