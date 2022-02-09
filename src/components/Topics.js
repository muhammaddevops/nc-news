import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((res) => {
      setTopic(res);
    });
  }, []);
  return (
    <>
      <div>
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
