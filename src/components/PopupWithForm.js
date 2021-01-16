import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
            <form name="info" className={`popup__form popup__form_${props.name}`} noValidate>
                <button type="button" className="popup__button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                {props.children};
            </form>
        </section>
    )
}

export default PopupWithForm;