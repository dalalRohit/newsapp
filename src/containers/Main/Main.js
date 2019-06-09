import React, { Component } from 'react'
import classes from './Main.css';
import axios from './../../axios-news';
import Sections from './../../components/Sections/Sections';
import Spinner from './../../components/UI/Spinner/Spinner';
import Card from './../../components/Card/Card';
import Modal from './../../components/UI/Modal/Modal';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Auxi from './../../hoc/Auxi/Auxi';
class Main extends Component {
    state = {
        country: 'in',
        news: [],
        spinner: false,
        section: 'Headlines',
        error: '',
        modal: false
    }
    toggleDesc = (x) => {
        let oldNews = this.state.news;
        let toOpen = oldNews.find((el) => {
            if (el.index === x) return el;
        });
        toOpen['open'] = !toOpen['open'];
        this.setState({ news: oldNews });
    }
    toggleModal = () => {
        this.setState({ modal: false })
    }

    toggleSectionClick = (section) => {
        this.setState({ spinner: true, section })
        axios.get(`?country=${this.state.country}&category=${section.toLowerCase()}&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
            .then((res) => {
                let news = res.data.articles.map((x) => {
                    return { ...x, index: Math.random(), open: false }
                })
                // console.log(news);
                this.setState({ news, spinner: false });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ error: err, modal: true, spinner: false });
            })
    }

    arrowDownHandler = () => {

    }


    // componentDidMount()
    componentDidMount() {
        this.setState({ spinner: true });
        axios.get(`?country=${this.state.country}&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
            .then((res) => {
                let news = res.data.articles.map((x) => {
                    return { ...x, index: Math.random(), open: false }
                })
                this.setState({ news, spinner: false });
                console.log(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
                this.setState({ error: err, modal: true, spinner: false });
            })
    }
    handleArchive = () => {
        alert('Archiving');
    }
    handleShare = () => {
        alert('Sharing')
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
                archive={this.handleArchive}
                share={this.handleShare}
                show={x.open} />
        })
        if (this.state.spinner) {
            newsCards = <Spinner />;
        }

        return (
            <Auxi>
                {/* show network error if no connection */}
                {
                    this.state.modal ? <Modal click={this.toggleModal}>{this.state.error.message}</Modal> : null
                }

                <div className={classes.News}>

                    <div className={classes.Categories} >
                        <Sections click={this.toggleSectionClick} />
                    </div>
                    <div className={classes.MainNews}>
                        <Spinner show={this.state.spinner} />
                        <h4>{this.state.section}</h4>
                        {this.state.error ? <h1>Network Error</h1> : newsCards}
                    </div>

                </div>
            </Auxi>
        )
    }
}

export default Main;
