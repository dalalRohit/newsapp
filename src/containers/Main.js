import React, { Component } from 'react'
// import './main.scss';
import axios from './../axios-news';
import Sections from './../components/Sections';
import Spinner from './../components/UI/Spinner';
import Card from './../components/Card';
import Modal from './../components/UI/Modal';

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
        axios.get(`?country=${this.state.country}&category=${section}&apiKey=${process.env.API_KEY}`)
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


    componentDidMount() {
        this.setState({ spinner: true });
        axios.get(`?country=${this.state.country}&apiKey=d6ecda84e1f44bb48c493585c4c88a51`)
            .then((res) => {
                let news = res.data.articles.map((x) => {
                    return { ...x, index: Math.random(), open: false }
                })
                this.setState({ news, spinner: false });
                // console.log(res.data.articles);
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
            <>
                {/* show network error if no connection */}
                {
                    this.state.modal ? <Modal click={this.toggleModal}>{this.state.error.message}</Modal> : null
                }

                <div className="News">

                    <div className="Categories" >
                        <Sections click={this.toggleSectionClick} />
                    </div>

                    <div className="MainNews">
                        <Spinner show={this.state.spinner} />
                        <h4>{this.state.section}</h4>
                        {this.state.error ? <h1>Network Error</h1> : newsCards}
                    </div>

                </div>
            </>
        )
    }
}

export default Main;
