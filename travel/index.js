// Burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector('.close_menu');
const navList = document.querySelector('.nav-list');
const bodyOpacityBurger = document.querySelector('.body_opacity_burger');

(function () {
    burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacityBurger.classList.add('body_opacity_burger_active');
    })
  /*burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacityBurger.style.display = bodyOpacityBurger.style.display === 'none' ? 'block' : 'none';
      setTimeout(function () {
          bodyOpacityBurger.classList.add('body_opacity_burger_active');
        }, 50);   
    })*/
    menuClose.addEventListener('click', () => { 
      menu.classList.remove('open_menu');
      bodyOpacityBurger.classList.remove('body_opacity_burger_active');
    })
    navList.addEventListener('click', () => {
      menu.classList.remove('open_menu');
      bodyOpacityBurger.classList.remove('body_opacity_burger_active');
    })
}());

document.addEventListener('click', function(e){
    if(menu !== e.target){
        menu.classList.remove('open_menu');
        bodyOpacityBurger.classList.remove('body_opacity_burger_active');
    }}, true);


// Slider

let caroosel = document.querySelector('.caroosel');
let arrowLeft = document.querySelector('.dest_navigation_left');
let arrowRight = document.querySelector('.dest_navigation_right');
let slide0 = document.querySelector('.item0');
let slide1 = document.querySelector('.item1');
let slide2 = document.querySelector('.item2');
let slide3 = document.querySelector('.item3');
let slide4 = document.querySelector('.item4');
let slider_1 = document.querySelector('.slider_1');
let slider_2 = document.querySelector('.slider_2');
let slider_3 = document.querySelector('.slider_3');

const moveLeft = () => {
  caroosel.classList.add('to-left');
  arrowLeft.removeEventListener('click', moveLeft);
  arrowRight.removeEventListener('click', moveRight);
  slide1.removeEventListener('click', moveLeft);
  slide3.removeEventListener('click', moveRight);

  if (slider_1 === document.querySelector('.slider_active')) {
    slider_1.classList.remove('slider_active')
    slider_3.classList.add('slider_active')
    return
  } else if (slider_2 === document.querySelector('.slider_active')) {
    slider_2.classList.remove('slider_active')
    slider_1.classList.add('slider_active')
    return
  } else if (slider_3 === document.querySelector('.slider_active')) {
    slider_3.classList.remove('slider_active')
    slider_2.classList.add('slider_active')
    return
  }

  };

const moveRight = () => {
  caroosel.classList.add('to-right');
  arrowRight.removeEventListener('click', moveRight);
  arrowLeft.removeEventListener('click', moveLeft);
  slide3.removeEventListener('click', moveRight);
  slide1.removeEventListener('click', moveLeft);
 
  if (slider_1 === document.querySelector('.slider_active')) {
    slider_1.classList.remove('slider_active')
    slider_2.classList.add('slider_active')
    return
  } else if (slider_2 === document.querySelector('.slider_active')) {
    slider_2.classList.remove('slider_active')
    slider_3.classList.add('slider_active')
    return
  } else if (slider_3 === document.querySelector('.slider_active')) {
    slider_3.classList.remove('slider_active')
    slider_1.classList.add('slider_active')
    return
  }

  };

arrowLeft.addEventListener('click', moveLeft);
arrowRight.addEventListener('click', moveRight);
slide1.addEventListener('click', moveLeft);
slide3.addEventListener('click', moveRight);

caroosel.addEventListener('animationend', (animationEvent) => {

  let activeSlide = slide2.innerHTML;

  if (animationEvent.animationName === 'move-left') {
    caroosel.classList.remove('to-left');
    slide2.innerHTML = slide1.innerHTML;
    slide1.innerHTML = slide0.innerHTML;
    slide3.innerHTML = activeSlide;
    slide0.innerHTML = activeSlide;
    slide4.innerHTML = slide1.innerHTML;
  } else if (animationEvent.animationName === 'move-right') {
    caroosel.classList.remove('to-right');
    slide2.innerHTML = slide3.innerHTML;
		slide3.innerHTML = slide4.innerHTML;
		slide1.innerHTML = activeSlide;
		slide4.innerHTML = activeSlide;
		slide0.innerHTML = slide3.innerHTML;
  }

  arrowLeft.addEventListener('click', moveLeft);
  arrowRight.addEventListener('click', moveRight);
  slide1.addEventListener('click', moveLeft);
  slide3.addEventListener('click', moveRight);

});

// PopUp menu

const popup = document.querySelector('.popup');
const loginBTN = document.querySelector('.login');
const background = document.querySelector('.body_opacity_popup');
const account = document.querySelector('.account');
const signinButton = document.querySelector('.btn_signin');

(function () {
  loginBTN.addEventListener('click', () => {
    popup.classList.add('popup_active');
    background.classList.add('body_opacity_popup_active');
  })
  account.addEventListener('click', () => {
    popup.classList.add('popup_active');
    background.classList.add('body_opacity_popup_active');
  })
  background.addEventListener('click', () => {
    popup.classList.remove('popup_active');
    background.classList.remove('body_opacity_popup_active');
  })
}());

(function signIn() {
  signinButton.addEventListener('click', signIn);
  let emailForm = document.querySelector('.login_email');
  let passwordForm = document.querySelector('.login_password');

  if (popup.classList.contains('popup_active')) {
    
    if (!emailForm.value || !passwordForm.value) {
      alert('Некоторые обязательные поля не заполнены.')
    } else {
    alert(`E-mail: ${emailForm.value}\nPassword: ${passwordForm.value}`);
    }
  }

}());












/*console.log(`Travel#2.
\n1.Вёрстка соответствует макету. Ширина экрана 390px +48
-блок <header> +6
-секция preview +9
-секция steps +9
-секция destinations +9
-секция stories +9
-блок <footer> +6
\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
-нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
-нет полосы прокрутки при ширине страницы от 390px до 320рх +8
\n3.На ширине экрана 390рх и меньше реализовано адаптивное меню +22
-при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
-при нажатии на бургер-иконку плавно появляется адаптивное меню +4
-адаптивное меню соответствует макету +4
-при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
-ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
-при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
\nИтог: 85
`);*/