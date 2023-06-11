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
const signinBTN = document.querySelector('.btn_signin');
const signupBTN = document.querySelector('.btn_signup');
const register = document.querySelector('.register_btn');
const login = document.querySelector('.login_btn');;
const titleLogin = document.querySelector('.login_title');
const titleAccount = document.querySelector('.account_title');
const haveAcc = document.querySelector('.popup_have_account');
const dontHaveAcc = document.querySelector('.popup_dont_have_account');
const fbBTN = document.querySelector('.btn_fb');
const gglBTN = document.querySelector('.btn_google');
const line = document.querySelector('.login_popup_line');
const forgot = document.querySelector('.forgot_pass');
const bodyHidden = document.querySelector('body');




(function () {
  loginBTN.addEventListener('click', () => {
    popup.classList.add('popup_active');
    background.classList.add('body_opacity_popup_active');
    bodyHidden.classList.add('body_hidden');
  })
  account.addEventListener('click', () => {
    popup.classList.add('popup_active');
    background.classList.add('body_opacity_popup_active');
    bodyHidden.classList.add('body_hidden');
  })
  background.addEventListener('click', () => {
    popup.classList.remove('popup_active');
    background.classList.remove('body_opacity_popup_active');
    setTimeout(function () {
      bodyHidden.classList.remove('body_hidden');
      titleLogin.style.display = 'block';
      titleAccount.style.display = 'none';
      signinBTN.style.display = 'block';
      signupBTN.style.display = 'none';
      dontHaveAcc.style.display = 'block';
      haveAcc.style.display = 'none';
      fbBTN.style.display = 'flex';
      gglBTN.style.display = 'flex';
      line.style.display = 'flex';
      forgot.style.display = 'block';
    }, 1000);   
  })
}());

(function () {

  register.addEventListener('click', () => {
  titleLogin.style.display = 'none';
  titleAccount.style.display = 'block';
  signinBTN.style.display = 'none';
  signupBTN.style.display = 'block';
  dontHaveAcc.style.display = 'none';
  haveAcc.style.display = 'block';
  fbBTN.style.display = 'none';
  gglBTN.style.display = 'none';
  line.style.display = 'none';
  forgot.style.display = 'none';
  });

}());

(function () {

  login.addEventListener('click', () => {
  titleLogin.style.display = 'block';
  titleAccount.style.display = 'none';
  signinBTN.style.display = 'block';
  signupBTN.style.display = 'none';
  dontHaveAcc.style.display = 'block';
  haveAcc.style.display = 'none';
  fbBTN.style.display = 'flex';
  gglBTN.style.display = 'flex';
  line.style.display = 'flex';
  forgot.style.display = 'block';
  });

}());


/*(function signIn() {

  signinBTN.addEventListener('click', signIn);
  signupBTN.addEventListener('click', signIn);
  let emailForm = document.querySelector('.login_email');
  let passwordForm = document.querySelector('.login_password');

  if (popup.classList.contains('popup_active')) {
    
    if (!emailForm.value || !passwordForm.value) {
      alert('Некоторые обязательные поля не заполнены.')
    } else {
    alert(`E-mail: ${emailForm.value}\nPassword: ${passwordForm.value}`);
    }
  }

}());*/

const loginForm = document.querySelector('.popup_form');
let emailForm = document.querySelector('.login_email');
let passwordForm = document.querySelector('.login_password');

function correctForm(event) {
	event.preventDefault();
  alert(`E-mail: ${emailForm.value}\nPassword: ${passwordForm.value}`)
}

loginForm.addEventListener('submit', correctForm);



console.log(`Travel#3.
\n1.Слайдер изображений в секции destinations +50
 - на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20
 - Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20
 - Анимации плавного перемещения для слайдера +10
\n2.Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50
 - логин попап соответствует верстке его закрытие происходит при клике вне попапа +25
 - логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25
\n3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25
\nИтог: 125
`);