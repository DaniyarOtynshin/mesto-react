import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup-image ${props.card ? 'popup_active' : ''}`}>
            <div className="popup-image__pic">
                <button type="button" onClick={props.onClose} className="popup__button"></button>
                <img alt="Картинка" src={props?.card?.link} className="popup-image__image" />
                <h2 className="popup-image__title"></h2>
            </div>
        </section>
    )
}

export default ImagePopup;