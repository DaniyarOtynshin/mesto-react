import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({})
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="edit" isOpen={isEditProfilePopupOpen} title="Редактировать профиль" onClose={closeAllPopups} buttonText="Сохранить">
          <section className="popup__section">
            <input type="text" minLength="2" maxLength="40" name="name" id="name-input" required placeholder="Имя" className="popup__input" />
            <span className="popup__input-error" id="name-input-error"></span>
          </section>
          <section className="popup__section">
            <input type="text" minLength="2" maxLength="200" name="about" id="description-input" required placeholder="О себе" className="popup__input" />
            <span className="popup__input-error" id="description-input-error"></span>
          </section>
        </PopupWithForm>
        <PopupWithForm name="add" isOpen={isAddPlacePopupOpen} title="Новое место" onClose={closeAllPopups} buttonText="Создать">
          <section className="popup__section">
            <input type="text" minLength="2" maxLength="30" name="name" id="title-input" required placeholder="Название" className="popup__input" />
            <span className="popup__input-error" id="title-input-error"></span>
          </section>
          <section className="popup__section">
            <input type="url" name="link" id="link-input" required placeholder="Ссылка на картинку" className="popup__input" />
            <span className="popup__input-error" id="link-input-error"></span>
          </section>
        </PopupWithForm>
        <PopupWithForm name="submit-form" isOpen={false} onClose={closeAllPopups} buttonText="Да">
          <h2 className="popup__title popup__title_submit-form">Вы уверены?</h2>
        </PopupWithForm>
        <PopupWithForm name="change-photo" isOpen={isEditAvatarPopupOpen} title="Обновить аватар" onClose={closeAllPopups} buttonText="Сохранить">
          <section className="popup__section">
            <input type="url" name="link" id="link-input" required placeholder="Ссылка на картинку" className="popup__input" />
            <span className="popup__input-error" id="link-input-error"></span>
          </section>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
