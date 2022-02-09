import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-app-backend-heroku.herokuapp.com/api",
});

export const getArticles = (topic_slug, order, sort_by) => {
  //  Alternative to axios params below:
  //   let path = "/articles?";
  //   if (topic_slug) path += `topic=${topic_slug}`;
  return newsApi
    .get("/articles", {
      params: { topic: topic_slug, order: order, sort_by: sort_by },
    })
    .then((res) => {
      console.log(res.data);
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
    console.log(res.data);
    return res.data;
  });
};
