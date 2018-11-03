import React, { Component } from 'react';
import logo from './logo.svg';
import NewsList from './NewsList';
import './App.css';
// API key - 894db8fbba3d4250a03ae7b4fe907b17

class App extends Component {
  constructor(){
    super();

    this.state = {
      news: null,
      loggedIn: false
    }

    this.getNews = this.getNews.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }  

  getNews = async () => {
   try{ 
    const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=894db8fbba3d4250a03ae7b4fe907b17');
    console.log('getNews', news)
    const newsJson = await news.json();
    console.log(newsJson)
    this.setState({
      news: newsJson
    })
  } catch(err){
    return err
  }
}
  render() {
    if (!this.state.loggedIn) {
      return <div>
      <h1>please log in</h1>
      <button onClick={() => this.setState({loggedIn: true})}>log in</button>
      </div>
    }
    if (!this.state.news) {
      return <h1>No news</h1>
    }

    return (
      <div className="App">
      <NewsList news={this.state.news}/>
      </div>
    );
  }
}

export default App;