let taskAddBtn = document.querySelector("#addBtn");
let form = document.querySelector("form");
let todoInput = document.getElementById("todoInput");
let parentNode = document.getElementById("todoList");
let deleteBtn = document.getElementsByTagName("button")[0];
let result = document.getElementById("result");

let checkItem = localStorage.getItem("task");
let todo = checkItem ? JSON.parse(checkItem) : [];

function validateForm(e) {
  !e.value ? (e.className = "alert") : (e.className = "success");
}

taskAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (todoInput.value) {
    todo.push(todoInput.value);
    localStorage.setItem("task", JSON.stringify(todo));
    location.reload();
  }
});

//display the taskList
todo.map((element, index) => {
  var li = document.createElement("li");
  li.classList = "taskText";
  li.innerHTML = `  <input type="checkbox"  class ="checkItem" onclick="checkHandler(this)" id="${element}" name="${element}" /> <label for ="${element}"> ${element} </label> 
    <button class="deleteBtn" onclick="deleteHandler(${index})"> x </button>`;
  parentNode.appendChild(li);
});

// remove the task
const deleteHandler = (e) => {
  let delItem = todo.filter((element, index) => {
    return index !== e;
  });
  localStorage.setItem("task", JSON.stringify(delItem));
  location.reload();
};

// check the complete task
let taskItem = document.getElementsByClassName("taskText");
let checkedItem = document.getElementsByClassName("checkItem");

// console.log(checkedItem);
let len = checkedItem.length;
function checkHandler(e) {
  if (e.hasAttribute("checked")) {
    e.removeAttribute("checked");
    e.nextElementSibling.classList.remove("line-through");
  } else {
    e.setAttribute("checked", true);
    e.nextElementSibling.classList.add("line-through");
  }
}

// display the remaining task left
result.innerHTML = `<span> ${todo.length}</span>  task left `;

// localStorage.clear();
// location.reload();

// let keys = Object.keys(localStorage);
// keys.forEach((value) => {
//   console.log(localStorage.getItem(JSON.stringify(keys)));
// });
//

//
// let me = Object.values(taskList);
// me.forEach((element) => {
//   console.log(element);

// if (element === ) {
//   console.log("ff");
// } else {
//   console.log("first");
// }
// });
//
// function countList() {
//   for (let k = 0; k < checkedItem.length; k++) {
//     if (checkedItem[k].hasAttribute("checked")) {
//       console.log(counter++);
//     }
//   }
// }
