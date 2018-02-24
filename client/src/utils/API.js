import axios from "axios";

export default {
  // Gets all articles
  findAllSaved: function() {
    return axios.get("/api/articles");
  },
  // Saves article with given id
  create: function() {
    return axios.post("/api/articles");
  },
  // Deletes the article with the given id
  remove: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  findAllSearched: function(){
    return axios.get("/api/articles")
  }
  
};
