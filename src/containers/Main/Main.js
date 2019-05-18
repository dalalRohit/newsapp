import React, { Component } from 'react'
import classes from './Main.css';
import axios from 'axios';
import Sections from './../../components/Sections/Sections';
import Spinner from './../../components/UI/Spinner/Spinner';
import Card from './../../components/Card/Card';
import { FaAngleDoubleDown } from 'react-icons/fa';
class Main extends Component {
    state = {
        country: 'in',
        news: [],
        spinner: false,
        section: 'Headlines'
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
        let section = s;
        this.setState({ section: s });
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${section.toLowerCase()}&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
            .then((res) => {
                console.log(res.data);
                this.setState({ news: res.data.articles })
            })
    }

    arrowDownHandler = () => {

    }

    // componentDidMount()
    componentDidMount() {
        this.setState({ spinner: true });
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
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
            <div className={classes.News}>

                <div className={classes.Categories} >
                    <Sections click={this.toggleSectionClick} />
                </div>

                <div className={classes.MainNews}>
                    <Spinner show={this.state.spinner} />

                    <h4>{this.state.section}</h4>

                    {newsCards}
                    <div className={classes.Arrow} onClick={this.arrowDownHandler}>
                        <FaAngleDoubleDown size={27} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;
