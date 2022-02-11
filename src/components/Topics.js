import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const Topics = () => {
  const userValues = useContext(UserContext);
  console.log(userValues);
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((res) => {
      setTopic(res);
    });
  }, []);
  return (
    <>
      <div>
        <Link to={`/`}>Home</Link>
        {topic.map((name) => {
          return (
            <li key={name.slug}>
              <Link to={`/${name.slug}/articles`}>{name.slug}</Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Topics;
