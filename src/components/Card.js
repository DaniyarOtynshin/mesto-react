import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <li className="element">
            <button type="button" className="element__delete"></button>
            <img alt={props.card.name} className="element__image" onClick={handleClick} src={props.card.link} />
            <div className="element__info">
                <h3 className="element__title">{props.card.name}</h3>
                <div className="element__like-section">
                    <button type="button" className="element__button" />
                    <span className="element__likes">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;