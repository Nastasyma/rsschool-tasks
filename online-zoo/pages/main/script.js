function correctForm(event) {
	event.preventDefault();
  document.querySelector('input[id="email"]').value = "";
}
document.querySelector('.enter_email').addEventListener('submit', correctForm);

function validate() {
  let email = document.querySelector('.email').value;
  let pattern = /\S+@\S+/;

  if(email.match(pattern))
  {
    document.querySelector('.submit_btn').style.color = 'black';
    document.querySelector('.submit_btn').style.border = '1px solid black';
  }
  else{
    document.querySelector('.submit_btn').style.color = 'red';
    document.querySelector('.submit_btn').style.border = '1px solid red';
  }
  if (email === "") {
    document.querySelector('.submit_btn').style.color = 'green';
    document.querySelector('.submit_btn').style.border = '1px solid green';
  }
}