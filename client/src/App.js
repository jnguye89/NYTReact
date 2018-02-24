import React, { Component } from 'react';
import {Input} from "./components/forms";
import API from "./utils/API";


// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class App extends Component {
  state = {
    searchArticles: [],
    savedArticles: [],
    topic: "",
    startDate:"",
    endDate:""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.findAllSaved().then(res => 
      this.setState({savedArticles: res.data, topic:"", startDate:"", endDate:""}))
  }

  loadSearchedArticles = () => {
    
  }

  handleSearchArticleSubmit = () => {
    articleData = {
      topic: this.state.topic,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    API.findAllSearched(articleData)
      .then(res => this.loadSearchedArticles())
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times</h1>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Search</div>
          <div className="panel-body">
            <form>
              <h3>Topic:</h3>
              <Input 
                placeholder="Topic" 
                name="topic"
                onChange={this.handleInputChange}
              />
              <h3>Start Year:</h3>
              <Input 
                placeholder="2018" 
                name="beginDate"
                onChange={this.handleInputChange}
              />
              <h3>End Year:</h3>
              <Input 
                placeholder="2017"
                name="endDate" 
                onChange={this.handleInputChange}
              />
              <input type="submit" value="Submit" className="btn btn-primary" onClick={this.handleSearchArticleSubmit} />
            </form>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Results</div>
          <div className="panel-body">

          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Saved Articles </div>
          <div className="panel-body">
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
