import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-app-backend-heroku.herokuapp.com/api",
});

export const getArticles = (topic_slug, sortBy) => {
  //  Alternative to axios params below:
  //   let path = "/articles?";
  //   if (topic_slug) path += `topic=${topic_slug}`;

  //   let order = sortBy === "created_at" ? "DESC" : "ASC";
  return newsApi
    .get("/articles", {
      params: { topic: topic_slug, sort_by: sortBy },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchArticleVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      console.log(res.data);
    });
};
