// Burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const menuClose = document.querySelector('.close_menu');
const navList = document.querySelector('.nav-list');
const bodyOpacity = document.querySelector('.body_opacity');

(function () {
    burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacity.classList.add('body_opacity_active');
    })
  /*burger.addEventListener('click', () => {
      menu.classList.add('open_menu');
      bodyOpacity.style.display = bodyOpacity.style.display === 'none' ? 'block' : 'none';
      setTimeout(function () {
          bodyOpacity.classList.add('body_opacity_active');
        }, 50);   
    })*/
    menuClose.addEventListener('click', () => { 
      menu.classList.remove('open_menu');
      bodyOpacity.classList.remove('body_opacity_active');
    })
    navList.addEventListener('click', () => {
      menu.classList.remove('open_menu');
      bodyOpacity.classList.remove('body_opacity_active');
    })
}());

document.addEventListener('click', function(e){
    if(menu !== e.target){
        menu.classList.remove('open_menu');
        bodyOpacity.classList.remove('body_opacity_active');
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
let slider = document.querySelectorAll('.slider');

let moveLeft = () => {
  caroosel.classList.add('to-left');
  slide1.removeEventListener('click', moveLeft);
  slide3.removeEventListener('click', moveRight);
  arrowLeft.removeEventListener('click', moveLeft);
  arrowRight.removeEventListener('click', moveRight);

  for (let i = 0; i < slider.length; i++) {
      if (slider[i] == document.querySelector('.slider_active')) {
        if (i == 0) {
          slider[0].classList.remove('slider_active')
          slider[2].classList.add('slider_active')
          return;
        } else if (i == 1) {
          slider[1].classList.remove('slider_active')
          slider[0].classList.add('slider_active')
          return;
        } else if (i == 2) {
          slider[2].classList.remove('slider_active')
          slider[1].classList.add('slider_active')
          return;
        }
      }
    }
  };

let moveRight = () => {
  caroosel.classList.add('to-right');
  slide1.removeEventListener('click', moveRight);
  slide3.removeEventListener('click', moveLeft);
  arrowLeft.removeEventListener('click', moveRight);
  arrowRight.removeEventListener('click', moveLeft);

  for (let i = 0; i < slider.length; i++) {
      if (slider[i] == document.querySelector('.slider_active')) {
        if (i == 0) {
          slider[0].classList.remove('slider_active')
          slider[1].classList.add('slider_active')
          return
        } else if (i == 1) {
          slider[1].classList.remove('slider_active')
          slider[2].classList.add('slider_active')
          return
        } else if (i == 2) {
          slider[2].classList.remove('slider_active')
          slider[0].classList.add('slider_active')
          return
        }
      }
    }
  };

arrowLeft.addEventListener('click', moveLeft);
arrowRight.addEventListener('click', moveRight);
slide1.addEventListener('click', moveLeft);
slide3.addEventListener('click', moveRight);



caroosel.addEventListener('animationend', (animation) => {

  let active = slide2.innerHTML;

  if (animation.animationName === 'move-left') {
    caroosel.classList.remove('to-left');
    slide2.innerHTML = slide1.innerHTML;
    slide1.innerHTML = slide0.innerHTML;
    slide3.innerHTML = active;
    slide0.innerHTML = active;
    slide4.innerHTML = slide1.innerHTML;
  } else {
    caroosel.classList.remove('to-right');
    slide2.innerHTML = slide3.innerHTML;
		slide3.innerHTML = slide4.innerHTML;
		slide1.innerHTML = active;
		slide4.innerHTML = active;
		slide0.innerHTML = slide3.innerHTML;
  }

  arrowLeft.addEventListener('click', moveLeft);
  arrowRight.addEventListener('click', moveRight);
  slide1.addEventListener('click', moveLeft);
  slide3.addEventListener('click', moveRight);

});














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