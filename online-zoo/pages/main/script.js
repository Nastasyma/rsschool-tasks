import animals from './petCards.js';

const email = document.querySelector('.email');
const submitBTN = document.querySelector('.submit_btn');
const emailForm = document.querySelector('.enter_email');
const petsPhotoWrapper = document.querySelector('.pets_photo_wrapper');
const BTNleft = document.querySelector('.left_btn');
const BTNright = document.querySelector('.right_btn');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const scrollBar = document.getElementById('scrollBar');
const userCard = document.querySelector('.user_card');
const userCards = document.querySelectorAll('.user_card');
const testimonialsPopupWrapper = document.querySelector('.testimonials_popup_wrapper');
const testimonialsPopup = document.querySelector('.testimonials_popup');
const mobileWrapperPopup = document.querySelector('.mobile_wrapper_popup');
const closeIcon = document.querySelector('.close_icon');

function correctForm(event) {
	event.preventDefault();
  email.value = "";
  email.style.border = '1px solid orange';
  submitBTN.style.color = 'black';
  submitBTN.style.border = '1px solid black';
}
emailForm.addEventListener('submit', correctForm);

function validate() {
  let pattern = /\S+@\S+/;

  if (email.value.match(pattern)) {
    email.style.border = '1px solid green';
    submitBTN.style.color = 'green';
    submitBTN.style.border = '1px solid green';
  }
  else {
    email.style.border = '1px solid red';
    submitBTN.style.color = 'red';
    submitBTN.style.border = '1px solid red';
  }
  if (email.value === "") {
    email.style.border = '1px solid orange';
    submitBTN.style.color = 'black';
    submitBTN.style.border = '1px solid black';
  }
}

let animalsList1 = [];
let animalsList2 = [];
let animalsList3 = [];
let petIndex;

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sortAnimals() {
  animalsList1.length = 0;
  animalsList2.length = 0;
  animalsList3.length = 0;
  if (window.innerWidth > 640) {
    for (let i=0; i<6; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList1.includes(animals[petIndex])) {
        i--
      } else {
        animalsList1.push(animals[petIndex]);
      }
    }
    for (let i=0; i<6; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList2.includes(animals[petIndex])) {
        i--
      } else {
        animalsList2.push(animals[petIndex]);
      }
    }
    for (let i=0; i<6; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList3.includes(animals[petIndex])) {
        i--
      } else {
        animalsList3.push(animals[petIndex]);
      }
    }
  }
  if (window.innerWidth <= 640) {
    for (let i=0; i<4; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList1.includes(animals[petIndex])) {
        i--
      } else {
        animalsList1.push(animals[petIndex]);
      }
    }
    for (let i=0; i<4; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList2.includes(animals[petIndex])) {
        i--
      } else {
        animalsList2.push(animals[petIndex]);
      }
    }
    for (let i=0; i<4; i++) {
      petIndex = getRandomNum(0, animals.length-1);
      //console.log("petIndex =", petIndex);
      if (animalsList3.includes(animals[petIndex])) {
        i--
      } else {
        animalsList3.push(animals[petIndex]);
      }
    }
  }
  //console.log("animalsList1 =", animalsList1);
  //console.log("animalsList2 =", animalsList2);
  //console.log("animalsList3 =", animalsList3);
}
sortAnimals();

function createPetCard1() {
  for (let i = 0; i < animalsList1.length; i++) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('pet_card');
    const div1 = document.createElement('div');
    div1.classList.add('card_photo_discription');
    const div2 = document.createElement('div');
    div2.classList.add('pet_description');
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    let image1 = new Image();
    image1.classList.add('card');
    image1.src = animalsList1[i].src;
    image1.alt = "animal_photo"
    div1.appendChild(image1);
    const div3 = document.createElement('div');
    div3.classList.add('pet_description_text');
    div2.appendChild(div3);
    const span1 = document.createElement('span');
    span1.classList.add('pet_title');
    span1.textContent = animalsList1[i].title;
    const span2 = document.createElement('span');
    span2.classList.add('pet_location');
    span2.textContent = animalsList1[i].location;
    div3.appendChild(span1);
    div3.appendChild(span2);
    let image2 = new Image();
    if (animalsList1[i].meal === '../../assets/images/banana-bamboo_icon.png') {
      image2.classList.add('banana_icon');
      image2.alt = "banana_icon"
    }
    if (animalsList1[i].meal === '../../assets/images/meet-fish_icon.png') {
      image2.classList.add('meet-fish_icon');
      image2.alt = "meet-fish_icon"
    }
    image2.src = animalsList1[i].meal;
    div2.appendChild(image2);
    section1.append(mainDiv);
  }
}
function createPetCard2() {
  for (let i = 0; i < animalsList2.length; i++) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('pet_card');
    const div1 = document.createElement('div');
    div1.classList.add('card_photo_discription');
    const div2 = document.createElement('div');
    div2.classList.add('pet_description');
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    let image1 = new Image();
    image1.classList.add('card');
    image1.src = animalsList2[i].src;
    image1.alt = "animal_photo"
    div1.appendChild(image1);
    const div3 = document.createElement('div');
    div3.classList.add('pet_description_text');
    div2.appendChild(div3);
    const span1 = document.createElement('span');
    span1.classList.add('pet_title');
    span1.textContent = animalsList2[i].title;
    const span2 = document.createElement('span');
    span2.classList.add('pet_location');
    span2.textContent = animalsList2[i].location;
    div3.appendChild(span1);
    div3.appendChild(span2);
    let image2 = new Image();
    if (animalsList2[i].meal === '../../assets/images/banana-bamboo_icon.png') {
      image2.classList.add('banana_icon');
      image2.alt = "banana_icon"
    }
    if (animalsList2[i].meal === '../../assets/images/meet-fish_icon.png') {
      image2.classList.add('meet-fish_icon');
      image2.alt = "meet-fish_icon"
    }
    image2.src = animalsList2[i].meal;
    div2.appendChild(image2);
    section2.append(mainDiv);
  }
}
function createPetCard3() {
  for (let i = 0; i < animalsList3.length; i++) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('pet_card');
    const div1 = document.createElement('div');
    div1.classList.add('card_photo_discription');
    const div2 = document.createElement('div');
    div2.classList.add('pet_description');
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    let image1 = new Image();
    image1.classList.add('card');
    image1.src = animalsList3[i].src;
    image1.alt = "animal_photo"
    div1.appendChild(image1);
    const div3 = document.createElement('div');
    div3.classList.add('pet_description_text');
    div2.appendChild(div3);
    const span1 = document.createElement('span');
    span1.classList.add('pet_title');
    span1.textContent = animalsList3[i].title;
    const span2 = document.createElement('span');
    span2.classList.add('pet_location');
    span2.textContent = animalsList3[i].location;
    div3.appendChild(span1);
    div3.appendChild(span2);
    let image2 = new Image();
    if (animalsList3[i].meal === '../../assets/images/banana-bamboo_icon.png') {
      image2.classList.add('banana_icon');
      image2.alt = "banana_icon"
    }
    if (animalsList3[i].meal === '../../assets/images/meet-fish_icon.png') {
      image2.classList.add('meet-fish_icon');
      image2.alt = "meet-fish_icon"
    }
    image2.src = animalsList3[i].meal;
    div2.appendChild(image2);
    section3.append(mainDiv);
  }
}
createPetCard1();
createPetCard2();
createPetCard3();

petsPhotoWrapper.addEventListener('animationend', (animationEvent) => {

  let changedItem;
  if (animationEvent.animationName === 'move-left') {
    petsPhotoWrapper.classList.remove('to-left');
    changedItem = section1;
    section2.innerHTML = changedItem.innerHTML;
    changedItem.innerHTML = "";
    sortAnimals();
    createPetCard1();
  } else if (animationEvent.animationName === 'move-right') {
    petsPhotoWrapper.classList.remove('to-right');
    changedItem = section3;
    section2.innerHTML = changedItem.innerHTML;
    changedItem.innerHTML = "";
    sortAnimals();
    createPetCard3();
  }

  BTNleft.addEventListener('click', moveLeft);
  BTNright.addEventListener('click', moveRight);
});

const moveLeft = () => {
  petsPhotoWrapper.classList.add('to-left');
  BTNleft.removeEventListener('click', moveLeft);
  BTNright.removeEventListener('click', moveRight);
};
const moveRight = () => {
  petsPhotoWrapper.classList.add('to-right');
  BTNright.removeEventListener('click', moveRight);
  BTNleft.removeEventListener('click', moveLeft);
};

BTNleft.addEventListener('click', moveLeft);
BTNright.addEventListener('click', moveRight);

function reset() {
  section1.innerHTML = '';
  section2.innerHTML = '';
  section3.innerHTML = '';
}
function changeReviewValue() {
  if (window.innerWidth <= 830) {
    userCard.style.marginLeft = '0';
    scrollBar.value = '0'
    //console.log(scrollBar.value);
  }
  if (window.innerWidth > 1000) {
    if (scrollBar.value === '0') {
      userCard.style.marginLeft = '0';
    }
    if (scrollBar.value === '1') {
      userCard.style.marginLeft = '-25.5%';
    }
    if (scrollBar.value === '2') {
      userCard.style.marginLeft = '-51%';
    }
    if (scrollBar.value === '3') {
      userCard.style.marginLeft = '-76.5%';
    }
    if (scrollBar.value === '4') {
      userCard.style.marginLeft = '-102%';
    }
    if (scrollBar.value === '5') {
      userCard.style.marginLeft = '-127.5%';
    }
    if (scrollBar.value === '6') {
      userCard.style.marginLeft = '-153%';
    }
    if (scrollBar.value === '7') {
      userCard.style.marginLeft = '-178.5%';
    }
  }
  if (window.innerWidth <= 1000) {
    if (scrollBar.value === '0') {
      userCard.style.marginLeft = '0';
    }
    if (scrollBar.value === '1') {
      userCard.style.marginLeft = '-34%';
    }
    if (scrollBar.value === '2') {
      userCard.style.marginLeft = '-68%';
    }
    if (scrollBar.value === '3') {
      userCard.style.marginLeft = '-102%';
    }
    if (scrollBar.value === '4') {
      userCard.style.marginLeft = '-136%';
    }
    if (scrollBar.value === '5') {
      userCard.style.marginLeft = '-171%';
    }
    if (scrollBar.value === '6') {
      userCard.style.marginLeft = '-205%';
    }
    if (scrollBar.value === '7') {
      userCard.style.marginLeft = '-239%';
    }
  }
  scrollBar.addEventListener("input", () => {
    //console.log(scrollBar.value);
    if (window.innerWidth > 1000) {
      if (scrollBar.value === '0') {
        userCard.style.marginLeft = '0';
      }
      if (scrollBar.value === '1') {
        userCard.style.marginLeft = '-25.5%';
      }
      if (scrollBar.value === '2') {
        userCard.style.marginLeft = '-51%';
      }
      if (scrollBar.value === '3') {
        userCard.style.marginLeft = '-76.5%';
      }
      if (scrollBar.value === '4') {
        userCard.style.marginLeft = '-102%';
      }
      if (scrollBar.value === '5') {
        userCard.style.marginLeft = '-127.5%';
      }
      if (scrollBar.value === '6') {
        userCard.style.marginLeft = '-153%';
      }
      if (scrollBar.value === '7') {
        userCard.style.marginLeft = '-178.5%';
      }
    }
    if (window.innerWidth <= 1000) {
      if (scrollBar.value === '0') {
        userCard.style.marginLeft = '0';
      }
      if (scrollBar.value === '1') {
        userCard.style.marginLeft = '-34%';
      }
      if (scrollBar.value === '2') {
        userCard.style.marginLeft = '-68%';
      }
      if (scrollBar.value === '3') {
        userCard.style.marginLeft = '-102%';
      }
      if (scrollBar.value === '4') {
        userCard.style.marginLeft = '-136%';
      }
      if (scrollBar.value === '5') {
        userCard.style.marginLeft = '-171%';
      }
      if (scrollBar.value === '6') {
        userCard.style.marginLeft = '-205%';
      }
      if (scrollBar.value === '7') {
        userCard.style.marginLeft = '-239%';
      }
    }
  });
}
changeReviewValue();

function popupReview() {
  if (window.innerWidth <= 830) {
    userCards.forEach(el => {
      el.addEventListener('click', (e) => {
        testimonialsPopupWrapper.classList.add('testimonials_popup_active');
        mobileWrapperPopup.classList.add('popup_active');
        mobileWrapperPopup.addEventListener('click', () => {
          testimonialsPopupWrapper.classList.remove('testimonials_popup_active');
          mobileWrapperPopup.classList.remove('popup_active');
        })
        closeIcon.addEventListener('click', () => {
          testimonialsPopupWrapper.classList.remove('testimonials_popup_active');
          mobileWrapperPopup.classList.remove('popup_active');
        })
        const currentCard = e.target.closest(".user_card");
        if(currentCard) {
          testimonialsPopup.innerHTML = "";
          testimonialsPopup.append(currentCard.cloneNode(true));
          document.querySelector('.testimonials_popup > .user_card > .user_review').style.height = '309px';
          document.querySelector('.testimonials_popup > .user_card').style.paddingRight = '10px';
          document.querySelector('.testimonials_popup > .user_card').style.width = '100%';
          document.querySelectorAll('.testimonials_popup > .user_card > .user_review > p').forEach(element => {
            element.style.paddingRight = '20px';
          });
          document.querySelector('.testimonials_popup > .user_card > .user_review').style.overflow = 'auto';
        }
      });
    });
  }
}
popupReview();

window.addEventListener('resize', () => {
  if (window.innerWidth === 640 || window.innerWidth === 1000 || window.innerWidth === 1600) {
    reset();
    sortAnimals()
    createPetCard1();
    createPetCard2();
    createPetCard3();
  }
  changeReviewValue();
  popupReview();
}, true);


