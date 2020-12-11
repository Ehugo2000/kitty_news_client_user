import axios from "axios";

const getArticles = async () => {
  const response = await axios.get("/articles", {});
  return response.data.articles;
};

const showArticle = async () => {
  const result = await axios.get("/articles/id", {});
  return result.data.article;
};

export { getArticles, showArticle };
