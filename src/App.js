import React, { Component } from 'react';
import classes from './App.css';
import Card from './components/Card/Card';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sections from './components/Sections/Sections';
import Header from './containers/Header/Header';
import Spinner from './components/UI/Spinner/Spinner';
class App extends Component {
  state = {
    news: [],
    spinner: false
  }

  toggleDesc = (x) => {
    let oldNews = this.state.news;
    let toOpen = oldNews.find((el) => {
      if (el.index === x) return el;
    });
    toOpen['open'] = !toOpen['open'];
    this.setState({ news: oldNews });
  }

  toggleSectionClick = (s) => {
    alert(s);
  }
  componentDidMount() {
    this.setState({ spinner: true });
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
      .then((res) => {
        let news = res.data.articles.map((x) => {
          return { ...x, index: Math.random(), open: false }
        })
        this.setState({ news });
        this.setState({ spinner: false })
        console.log(res.data.articles);
      })
  }

  render() {
    let news = [...this.state.news];

    var newsCards = news.map((x) => {
      return <Card
        key={x.index}
        author={x.title}
        link={x.url}
        imgUrl={x.urlToImage}
        date={x.publishedAt}
        source={x.source.name}
        content={x.description}
        click={() => this.toggleDesc(x.index)}
        show={x.open} />
    })
    return (
      <div className={classes.App}>
        <Header />

        <div className={classes.News}>

          <div className={classes.Categories} >
            <Sections click={this.toggleSectionClick} />
          </div>

          <div className={classes.MainNews}>
            <Spinner show={this.state.spinner} />
            <h4>Headlines</h4>
            {newsCards}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
