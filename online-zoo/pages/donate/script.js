const email = document.querySelector('.email');
const submitBTN = document.querySelector('.submit_btn');
const emailForm = document.querySelector('.enter_email');
const amountInput = document.querySelector('.another_amount_input');
const payNumber = document.querySelectorAll('.pay_number');
const amount = document.getElementById('donate_input_value');
document.documentElement.style.setProperty('--visibility', "hidden");

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
  } else {
    document.documentElement.style.setProperty('--visibility', "hidden");
    amountInput.style.border = '#929699';
    amountInput.style.outline = '1px solid black';
  }
}

amountInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    amountInput.value = "";
    document.documentElement.style.setProperty('--visibility', "hidden");
    amountInput.style.border = '#929699';
    amountInput.style.outline = '1px solid black';
  }
})

/* payNumber.forEach(el => {
  el.addEventListener('click', (e) => {
    for (let i=0; i<payNumber.length; i++) {
      payNumber[i].classList.remove('active_number');
    }
    e.target.classList.add('active_number');
  })
})

amount.addEventListener("change", function() {
  console.log(this.value);
}); */