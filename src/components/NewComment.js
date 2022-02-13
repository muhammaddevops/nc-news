import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { postComments } from "../utils/api";

const NewComment = ({ article_id }) => {
  const { loggedInUser } = useContext(UserContext);
  const [userComment, setUserComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postedComment = {
      username: loggedInUser.username,
      body: userComment,
    };
    setUserComment("");
    postComments(article_id, postedComment).then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          placeholder="Add a comment..."
        />
      </label>
      <button>Post</button>
    </form>
  );
};
export default NewComment;
