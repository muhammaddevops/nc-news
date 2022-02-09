import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import moment from "moment";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    getArticles(topic_slug).then((res) => {
      setArticles(res);
    });
  }, [topic_slug]);

  return (
    <>
      <div className="Articles">
        <h1>Latest News Articles</h1>
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
                  Topic: {article.topic + " "} Comments: {article.comment_count}
                </p>
                <p>
                  By: {article.author + " "}
                  On: {moment(article.created_at).format("MMM Do YY")}{" "}
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
