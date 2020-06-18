import React from 'react';
import { MdArchive, MdShare } from 'react-icons/md';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
// import './card.scss';

const card = (props) => {
    let arrowToShow = props.show ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />
    return (
        <div className="Card">
            <i>{props.source}</i>

            <div className="Image">
                <a href={props.link} rel="noopener noreferrer" target="_blank">
                    <img src={props.imgUrl} alt={props.author} title={props.author} />
                </a>
            </div>

            <div className="Link">
                <a href={props.link} rel="noopener noreferrer" target="_blank">{props.author}</a>
            </div>

            <div className="Extra">
                <div className="Archive" onClick={props.archive}>
                    <MdArchive size={30} />
                </div>
                <div className="Icon" onClick={props.click} >
                    {arrowToShow}
                </div>
                <div className="Share" onClick={props.share}>
                    <MdShare size={30} />
                </div>
            </div>

            <article
                className="Article"
                style={{ display: props.show ? 'block' : 'none' }} >

                {props.content}
            </article>

        </div>

    )
};

export default card;