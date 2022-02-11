import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import moment from "moment";

const Articles = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");

  useEffect(() => {
    getArticles(topic_slug, sortBy).then((res) => {
      setArticles(res);
    });
  }, [topic_slug, sortBy]);

  return (
    <>
      <div className="Articles">
        <h1>Latest News Articles</h1>
        <h3>Sort by:</h3>
        <button onClick={() => setSortBy("created_at")}>Most Recent</button>
        <button onClick={() => setSortBy("comment_count")}>Comments</button>
        <button onClick={() => setSortBy("votes")}>Votes</button>
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <h3>
                  {" "}
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>{" "}
                </h3>
                <p>
                  Topic: {article.topic + " "} Comments:{" "}
                  {article.comment_count + " "} Votes: {article.votes}
                </p>
                <p>
                  By: {article.author + " "}
                  On: {moment(article.created_at).format("MMM Do YY")}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
