import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },

  saveArticle: function(articleData){
      return axios.post("/api/articles", articleData);
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};
