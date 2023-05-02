import React from "react";
import Image from "../images/Image.png";

export default function Card(props) {
    const backgroundColor = props.greyBackground ? "Card--grey" : null;

    return (
        <div className={`Card__body  ${backgroundColor}`}>
            <img className="Card__image" src={props.image} />
            <h3 className="Card__title">{props.title}</h3>
            {
                !props.image &&
                <p className="Card__text">{props.text}</p>
            }

            <a className="Card__link" href={props.link || '#'}>Read more</a>
        </div>
    );
}
