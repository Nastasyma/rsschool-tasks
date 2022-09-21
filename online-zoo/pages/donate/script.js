const email = document.querySelector('.email');
const submitBTN = document.querySelector('.submit_btn');
const emailForm = document.querySelector('.enter_email');
const amountInput = document.querySelector('.another_amount_input');

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
  if (this.value.length > 4) {
      this.value = this.value.slice(0,4);
  }
}

amountInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    amountInput.value = "";
  }
})

