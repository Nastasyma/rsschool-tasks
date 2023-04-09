import animals from './pets.js';

// Popup

function popupAnimal() {
  const bodyHidden = document.querySelector('body');
  const popup = document.querySelector('.popup');
  const mobileWrapperPopup = document.querySelector('.mobile_wrapper_popup');
  const cardsItem = document.querySelectorAll('.cards_item');
  cardsItem.forEach(el => {
    el.addEventListener('click', (e) => {
      const card = animals.find(el => el['id'] === e.currentTarget.dataset.id)
      // console.log(card);
      popup.innerHTML = "";

      const closeBTN = document.createElement('button');
      closeBTN.classList.add('popup__close_icon');
      let closeIcon = new Image();
      closeIcon.classList.add('close_icon');
      closeIcon.src = "../../assets/icons/close-icon.svg";
      closeBTN.appendChild(closeIcon);
      popup.append(closeBTN);

      const popupWrapper = document.createElement('div');
      popupWrapper.classList.add('popup__wrapper');

      const popupImgWrapper = document.createElement('div');
      popupImgWrapper.classList.add('popup__img_wrapper');
      let imgPopup = new Image();
      imgPopup.classList.add('img_popup');
      imgPopup.src = `../../assets/images/${card.img}`;
      popupImgWrapper.appendChild(imgPopup);
      popupWrapper.append(popupImgWrapper);

      const popupContent = document.createElement('div');
      popupContent.classList.add('popup__content');

      const popupTitle = document.createElement('span');
      popupTitle.classList.add('popup__title');
      popupTitle.textContent = card.name;
      popupContent.appendChild(popupTitle);

      const popupName = document.createElement('span');
      popupName.classList.add('popup__name');
      popupName.textContent = `${card.type} - ${card.breed}`;
      popupContent.appendChild(popupName);

      const popupDesc = document.createElement('p');
      popupDesc.classList.add('popup__desc');
      popupDesc.textContent = card.description;
      popupContent.appendChild(popupDesc);

      const popupDescList = document.createElement('ul');
      popupDescList.classList.add('popup__desc_list');

      const age = document.createElement('li');
      age.classList.add('desc_item');
      age.innerHTML = `<b>Age: </b> ${card.age}`;
      popupDescList.appendChild(age);

      const inoculations = document.createElement('li');
      inoculations.classList.add('desc_item');
      inoculations.innerHTML = `<b>Inoculations: </b> ${card.inoculations}`;
      popupDescList.appendChild(inoculations);

      const diseases = document.createElement('li');
      diseases.classList.add('desc_item');
      diseases.innerHTML = `<b>Diseases: </b> ${card.diseases}`;
      popupDescList.appendChild(diseases);

      const parasites = document.createElement('li');
      parasites.classList.add('desc_item');
      parasites.innerHTML = `<b>Parasites: </b> ${card.parasites}`;
      popupDescList.appendChild(parasites);

      popupContent.appendChild(popupDescList);
      popupWrapper.append(popupContent);
      popup.append(popupWrapper);

      popup.classList.add('pets_popup_active');
      mobileWrapperPopup.classList.add('popup_active');
      bodyHidden.classList.add('body_hidden');
      mobileWrapperPopup.addEventListener('click', () => {
        popup.classList.remove('pets_popup_active');
        mobileWrapperPopup.classList.remove('popup_active');
        bodyHidden.classList.remove('body_hidden');
      })
      closeBTN.addEventListener('click', () => {
        popup.classList.remove('pets_popup_active');
        mobileWrapperPopup.classList.remove('popup_active');
        bodyHidden.classList.remove('body_hidden');
      })
    });
  });
}

export { popupAnimal };
