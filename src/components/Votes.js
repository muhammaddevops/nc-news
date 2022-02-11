import { useState, useEffect } from "react";
import { patchArticleVotes } from "../utils/api";

const Votes = ({ votes, article_id }) => {
  const [changeVote, setChangeVote] = useState(0);

  const upVote = () => {
    setChangeVote((currVote) => currVote + 1);
    patchArticleVotes(article_id).catch((err) => {
      setChangeVote((currVote) => currVote - 1);
    });
  };

  return <button onClick={() => upVote()}>Votes {votes + changeVote}</button>;
};

export default Votes;
