import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { MdArchive, MdShare } from 'react-icons/md';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import classes from './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const card = (props) => {
    let arrowToShow = props.show ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />
    return (
        <div className={classes.Card}>
            <div className={classes.Image}>
                <div className={classes.Archive}>
                    <MdArchive size={30} />
                </div>

                <img className="img-fluid" src={props.imgUrl} alt={props.author} title={props.author} />

                <div className={classes.Share}>
                    <MdShare size={30} />
                </div>
            </div>

            <div className={classes.Link}>
                <a href={props.link} target="_blank">{props.author}</a>
            </div>

            <div className={classes.Extra}>
                <p>{props.source}</p>


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