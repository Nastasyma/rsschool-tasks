const email = document.querySelector('.email');
const submitBTN = document.querySelector('.submit_btn');
const emailForm = document.querySelector('.enter_email');
const amountInput = document.querySelector('.another_amount_input');

function correctForm(event) {
	event.preventDefault();
  email.value = "";
}
emailForm .addEventListener('submit', correctForm);

function validate() {
  let pattern = /\S+@\S+/;

  if(email.value.match(pattern))
  {
    submitBTN.style.color = 'black';
    submitBTN.style.border = '1px solid black';
  }
  else{
    submitBTN.style.color = 'red';
    submitBTN.style.border = '1px solid red';
  }
  if (email.value === "") {
    submitBTN.style.color = 'green';
    submitBTN.style.border = '1px solid green';
  }
}

amountInput.oninput = function () {
  if (this.value.length > 4) {
      this.value = this.value.slice(0,4);
  }
}

