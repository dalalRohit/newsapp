import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import classes from './Card.css';

const card = (props) => {
    let arrowToShow = props.show ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />
    return (
        <div className={classes.Card}>
            <div className={classes.Image}>
                <img src={props.imgUrl} alt={props.author} title={props.author} />
            </div>

            <div className={classes.Link}>
                <a href={props.link} target="_blank">{props.author}</a>
            </div>

            <div className={classes.Extra}>
                <p>{props.source}</p>

                <Moment fromNow ><p>{props.date}</p></Moment>

                <div className={classes.Icon} onClick={props.click} >
                    {arrowToShow}
                </div>
            </div>

            <article
                className={classes.Article}
                style={{ display: props.show ? 'block' : 'none' }} >

                {props.content}
            </article>

        </div>

    )
};

export default card;