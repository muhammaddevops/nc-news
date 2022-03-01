import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments, getSingleArticle } from "../utils/api";
import moment from "moment";
import Votes from "./Votes";
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
    getArticleComments(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  return (
    <>
      <div className="SingleArticle">
        <h1>{article.title}</h1>
        <ul>
          <li key={article.article_id}>
            <h3> By: {article.author}</h3>
            <p>On: {moment(article.created_at).format("MMM Do YY")} </p>
            <p>Topic: {article.topic}</p>
            <p className="SingleArticleBody">{article.body}</p>
            <Votes votes={article.votes} article_id={article.article_id} />
            <p>Comments: {article.comment_count}</p>
          </li>
          <NewComment article_id={article.article_id} />
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p className="CommentBody">{comment.body}</p>
                <p>by: {comment.author}</p>
                <p>on: {moment(comment.created_at).format("MMM Do YY")}</p>
                {comment.author === "jessjelly" ? (
                  DeleteComment(comment.comment_id)
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SingleArticle;
