import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'moment-timezone';
import { MdArchive, MdShare } from 'react-icons/md';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import classes from './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const card = (props) => {
    let arrowToShow = props.show ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />
    return (
        <div className={classes.Card}>
            <i>{props.source}</i>

            <div className={classes.Image}>
                <img src={props.imgUrl} alt={props.author} title={props.author} />
            </div>

            <div className={classes.Link}>
                <a href={props.link} target="_blank">{props.author}</a>
            </div>

            <div className={classes.Extra}>
                <div className={classes.Archive} onClick={props.archive}>
                    <MdArchive size={30} />
                </div>
                <div className={classes.Icon} onClick={props.click} >
                    {arrowToShow}
                </div>
                <div className={classes.Share} onClick={props.share}>
                    <MdShare size={30} />
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