import langObject from './languageObj.js';
import { language, langs } from './settings.js';

// ------- todo list -------

const todoBTN = document.querySelector('.todo_btn');
const todoMenu = document.querySelector('.todo_widget');
const closeTodo = document.querySelector('.todo_close');
const addBTN = document.querySelector('.add_btn');
const tasksList = document.querySelector('.tasks');
const addTask = document.querySelector('.todo_addtask');
const todoTitleWidget = document.querySelector('.todo_text');

(function () { // вызов todo list popup
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

  function addNewTask() { // создать новые задачи в todo list 
    let li = document.createElement("li");
    li.classList.add('tasks_item');
    let div = document.createElement("div");
    div.classList.add('task_container');
    let divIcon = document.createElement("button");
    divIcon.classList.add('cancel_icon');
    li.appendChild(div);
    li.appendChild(divIcon);
    let divCheck = document.createElement("span");
    divCheck.classList.add('check_task');
    div.appendChild(divCheck);
    let inputValue = document.getElementById("todo_input").value;
    let textValue = document.createTextNode(inputValue);
    div.appendChild(textValue);
    if (!inputValue == "") {
      tasksList.appendChild(li);
    }
    localStorage.setItem('tasks_content', tasksList.innerHTML);
  }
  addBTN.addEventListener("click", () => {
    addNewTask();
    document.querySelector('input[id="todo_input"]').value = "";
  });

  // зачеркнуть задачу / закрыть задачу по крестику
  tasksList.addEventListener("click", function (e) {     
    let checkedItem = e.target.parentNode;
    
    if (e.target.tagName === "SPAN") {
      checkedItem.classList.toggle("item_checked");
      e.target.classList.toggle('task_checked');
    }
    if (e.target.tagName === "BUTTON") { 
      checkedItem.remove();
    }
    
    localStorage.setItem('tasks_content', tasksList.innerHTML);
  }
  );
  langs.forEach(el => {
    el.addEventListener('change', () => {
      // переключение языка в настройках меняет язык placeholder todo 
      addTask.setAttribute('placeholder', langObject[language].placeholderTodo);
      localStorage.setItem('todo_placeholder', langObject[language].placeholderTodo);
      // переключение языка в настройках меняет язык todo add button
      addBTN.textContent = langObject[language].addBtn;
      localStorage.setItem('addBtn_title', langObject[language].addBtn);
      // переключение языка в настройках меняет язык todo title
      todoTitleWidget.textContent = langObject[language].todo;
    })
  })

  // Local Storage для todo list
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('todo_active', todoMenu.style.transform);
  });
  window.addEventListener('DOMContentLoaded', () => {
    todoMenu.style.transform = localStorage.getItem('todo_active');
    if (localStorage.getItem('addBtn_title')) 
    addBTN.textContent = localStorage.getItem('addBtn_title');
    if (localStorage.getItem('todo_placeholder')) 
    addTask.placeholder = langObject[language].placeholderTodo;
    if (localStorage.getItem('todo_title')) 
    todoTitleWidget.textContent = localStorage.getItem('todo_title');
    if (localStorage.getItem('tasks_content'))
    tasksList.innerHTML = localStorage.getItem('tasks_content');
  })