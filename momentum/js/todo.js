// ------- todo list -------

const todoBTN = document.querySelector('.todo_btn');
const todoMenu = document.querySelector('.todo_widget');
const closeTodo = document.querySelector('.todo_close');
const addBTN = document.querySelector('.add_btn');

(function () { // вызов todo list
  todoBTN.addEventListener('click', () => {
    if (todoMenu.style.transform === "translateX(150%)") {
      todoMenu.style.transform = "translateX(0px)";
    } else {
      todoMenu.style.transform = "translateX(150%)";
    }
  })
  closeTodo.addEventListener('click', () => {
    todoMenu.style.transform = "translateX(150%)";
  })
  }());

  function newElement() {
    let li = document.createElement("li");
    li.classList.add('tasks_item');
    let div = document.createElement("div");
    div.classList.add('task_container');
    let divIcon = document.createElement("div");
    divIcon.classList.add('cancel_icon');
    divIcon.id = 'cancel';
    li.appendChild(div);
    li.appendChild(divIcon);
    let checkbox = document.createElement("input");
    checkbox.classList.add('task_input');
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    let span = document.createElement("span");
    div.appendChild(span);
    let inputValue = document.getElementById("todo_input").value;
    let textValue = document.createTextNode(inputValue);
    span.appendChild(textValue);
    if (!inputValue == "") {
      document.querySelector(".tasks").appendChild(li);
    }
  }
  addBTN.addEventListener("click", newElement);


  let list = document.querySelector(".tasks");
  list.addEventListener("click", function (e) {
    console.log(e.target);
    
    let checkItem = e.target.parentNode;
    if (e.target.checked) {
      checkItem.classList.toggle("item_checked", true)
    } else {
      checkItem.classList.toggle("item_checked", false)
    }
    
    if (e.target.id === "cancel") {
      checkItem.remove();
    }
  }
  );

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('todo_active', todoMenu.style.transform);
  });
  window.addEventListener('DOMContentLoaded', () => {
    todoMenu.style.transform = localStorage.getItem('todo_active');
  })
