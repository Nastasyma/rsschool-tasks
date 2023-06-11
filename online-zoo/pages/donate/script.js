const email = document.querySelector('.email');
const submitBTN = document.querySelector('.submit_btn');
const emailForm = document.querySelector('.enter_email');
const amountInput = document.querySelector('.another_amount_input');
const dollarsGray = document.querySelector('.dollars_gray');
const payNumber = document.querySelectorAll('.pay_number');
const inputDonate1 = document.querySelector('.input1');
const inputDonate2 = document.querySelector('.input2');
const inputDonate3 = document.querySelector('.input3');
document.documentElement.style.setProperty('--visibility', "hidden");
document.documentElement.style.setProperty('--background', "url('../../assets/images/roller_icon.png')");
document.documentElement.style.setProperty('--background2', "url('../../assets/images/roller_icon_small.png')");

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
amountInput.oninput = function () {
  if (this.value.length > 4 || this.value < 0) {
    this.value = this.value.slice(0,4);
    document.documentElement.style.setProperty('--visibility', "visible");
    amountInput.style.border = '1px solid red';
    amountInput.style.outline = '1px solid red';
    dollarsGray.style.color = 'red';
    amountInput.style.color = 'red';
  } else {
    document.documentElement.style.setProperty('--visibility', "hidden");
    amountInput.style.border = '#929699';
    amountInput.style.outline = '1px solid black';
    dollarsGray.style.color = '#929699';
    amountInput.style.color = '#929699';
  }
}
amountInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    amountInput.value = "";
    document.documentElement.style.setProperty('--visibility', "hidden");
    amountInput.style.border = '#929699';
    amountInput.style.outline = '1px solid black';
    for (let i=0; i<payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
    }
    payNumber[5].classList.add('active_number');
    inputDonate1.value = '5';
    inputDonate2.value = '4';
    inputDonate3.value = '2';
  }
})
payNumber.forEach(el => {
  el.addEventListener('click', (e) => {
    setThumb();
    for (let i=0; i<payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
    }
    e.target.classList.add('active_number');
    //console.log(e.target.value)
    inputDonate1.value = e.target.value;
    inputDonate2.value = e.target.value-1;
    inputDonate3.value = e.target.value-3;
    if(e.target.value === '0') {
      amountInput.value = '5000'
    } else if(e.target.value === '1') {
      amountInput.value = '2000'
    } else if(e.target.value === '2') {
      amountInput.value = '1000'
    } else if(e.target.value === '3') {
      amountInput.value = '500'
    } else if(e.target.value === '4') {
      amountInput.value = '250'
    } else if(e.target.value === '5') {
      amountInput.value = '100'
    } else if(e.target.value === '6') {
      amountInput.value = '50'
    } else if(e.target.value === '7') {
      amountInput.value = '25'
    }
  });
});
inputDonate1.addEventListener("change", function() {
  setThumb();
  //console.log(inputDonate1.value);
  for (let i = 0; i < payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
      payNumber[inputDonate1.value].classList.add('active_number');
      if(payNumber[0].classList.contains('active_number')) {
        amountInput.value = '5000'
      }
      if(payNumber[1].classList.contains('active_number')) {
        amountInput.value = '2000'
      }
      if(payNumber[2].classList.contains('active_number')) {
        amountInput.value = '1000'
      }
      if(payNumber[3].classList.contains('active_number')) {
        amountInput.value = '500'
      }
      if(payNumber[4].classList.contains('active_number')) {
        amountInput.value = '250'
      }
      if(payNumber[5].classList.contains('active_number')) {
        amountInput.value = '100'
      }
      if(payNumber[6].classList.contains('active_number')) {
        amountInput.value = '50'
      }
      if(payNumber[7].classList.contains('active_number')) {
        amountInput.value = '25'
      }
  }
});
inputDonate2.addEventListener("change", function() {
  setThumb();
  //console.log(inputDonate2.value);
  for (let i = 0; i < payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
      payNumber[+inputDonate2.value+1].classList.add('active_number');
      if(payNumber[1].classList.contains('active_number')) {
        amountInput.value = '2000'
      }
      if(payNumber[2].classList.contains('active_number')) {
        amountInput.value = '1000'
      }
      if(payNumber[3].classList.contains('active_number')) {
        amountInput.value = '500'
      }
      if(payNumber[4].classList.contains('active_number')) {
        amountInput.value = '250'
      }
      if(payNumber[5].classList.contains('active_number')) {
        amountInput.value = '100'
      }
      if(payNumber[6].classList.contains('active_number')) {
        amountInput.value = '50'
      }
      if(payNumber[7].classList.contains('active_number')) {
        amountInput.value = '25'
      }
  }
});
inputDonate3.addEventListener("change", function() {
  setThumb();
  //console.log(inputDonate3.value);
  for (let i = 0; i < payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
      payNumber[+inputDonate3.value+3].classList.add('active_number');
      if(payNumber[3].classList.contains('active_number')) {
        amountInput.value = '500'
      }
      if(payNumber[4].classList.contains('active_number')) {
        amountInput.value = '250'
      }
      if(payNumber[5].classList.contains('active_number')) {
        amountInput.value = '100'
      }
      if(payNumber[6].classList.contains('active_number')) {
        amountInput.value = '50'
      }
      if(payNumber[7].classList.contains('active_number')) {
        amountInput.value = '25'
      }
  }
});
function setThumb() {
  document.documentElement.style.setProperty('--background', "url('../../assets/images/roller_icon.png')");
  document.documentElement.style.setProperty('--background2', "url('../../assets/images/roller_icon_small.png')");
}
function changeAmount() {
  amountInput.addEventListener("input", function() {
    //console.log(amountInput.value);
    for (let i=0; i<payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
    }
    document.documentElement.style.setProperty('--background', "none");
    document.documentElement.style.setProperty('--background2', "none");
    if(amountInput.value === '5000') {
      payNumber[0].classList.add('active_number');
      inputDonate1.value = '0';
      setThumb();
    }
    if(amountInput.value === '2000') {
      payNumber[1].classList.add('active_number');
      inputDonate1.value = '1';
      inputDonate2.value = '0';
      setThumb();
    }
    if(amountInput.value === '1000') {
      payNumber[2].classList.add('active_number');
      inputDonate1.value = '2';
      inputDonate2.value = '1';
      setThumb();
    }
    if(amountInput.value === '500') {
      payNumber[3].classList.add('active_number');
      inputDonate1.value = '3';
      inputDonate2.value = '2';
      inputDonate3.value = '0';
      setThumb();
    }
    if(amountInput.value === '250') {
      payNumber[4].classList.add('active_number');
      inputDonate1.value = '4';
      inputDonate2.value = '3';
      inputDonate3.value = '1';
      setThumb();
    }
    if(amountInput.value === '100') {
      payNumber[5].classList.add('active_number');
      inputDonate1.value = '5';
      inputDonate2.value = '4';
      inputDonate3.value = '2';
      setThumb();
    }
    if(amountInput.value === '50') {
      payNumber[6].classList.add('active_number');
      inputDonate1.value = '6';
      inputDonate2.value = '5';
      inputDonate3.value = '3';
      setThumb();
    }
    if(amountInput.value === '25') {
      payNumber[7].classList.add('active_number');
      inputDonate1.value = '7';
      inputDonate2.value = '6';
      inputDonate3.value = '4';
      setThumb();
    }
    if(amountInput.value === '5000' && window.innerWidth <= 1000) {
      document.documentElement.style.setProperty('--background', "none");
    }
    if((amountInput.value === '2000' || amountInput.value === '1000') && window.innerWidth <= 640) {
      document.documentElement.style.setProperty('--background', "none");
      document.documentElement.style.setProperty('--background2', "none");
    }
  });
}
changeAmount();

window.addEventListener('resize', () => {
  changeAmount();
});