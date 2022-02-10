import { useState, useEffect } from "react";

const Votes = ({ votes, article }) => {
  const [changeVote, setChangeVote] = useState(0);

  const upVote = () => {
    setChangeVote((currVote) => (currVote += 1));
  };

  return <button onClick={() => upVote()}>Votes {votes + changeVote}</button>;
};

export default Votes;
