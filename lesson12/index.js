'use strict';
const todoControl = document.querySelector(".todo-control"),
      headerInput = document.querySelector(".header-input"),
      todoList = document.querySelector(".todo-list"),
      todoComleted = document.querySelector(".todo-completed");

let todoData = [];//наш массив


const render = function(){

          todoList.textContent = "";
          todoComleted.textContent = "";

    todoData.forEach(function (item, strDelete) {
      const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerHTML = "<span class='text-todo'>" + item.value + "</span>" +//magic   HTML in JS
                          '<div class="todo-buttons">' +
                              '<button class="todo-remove"></button>' +
                              '<button class="todo-complete"></button>' +
                          '</div>';

        if(item.completed) {
          todoComleted.append(li);
        }else {
          todoList.append(li);
        }
       
        const btnTodoComlete = li.querySelector(".todo-complete");
              btnTodoComlete.addEventListener("click", function(){

                item.completed = !item.completed;
                render();
        });

         const btnTodoRemove = li.querySelector('.todo-remove');
            btnTodoRemove.addEventListener('click', function() {
				      todoData.splice(strDelete, 1);
				      render();
        });
    });
  // localStorage.setItem(todoData, JSON.stringify(todoData));
  // todoData = JSON.parse(localStorage.getItem("todoData"));
  let myJson = JSON.stringify(todoData);
	    localStorage.setItem('json',myJson);//теперь все данные хранятся в LocalStorage

};
todoControl.addEventListener("submit", function(event){
    event.preventDefault();
	if (headerInput.value !== '') {
		const newTodo = {
			value: headerInput.value,
			completed: false
		};
		todoData.push(newTodo);
		headerInput.value = '';
		render();
	}
});
const localJson = function() {//перевести JSON обратно в JS
	let jsonLocalStorage = localStorage.getItem('json');
	
	if (jsonLocalStorage === null) {
		return;
	} else {
		 todoData = JSON.parse(jsonLocalStorage);
	}
};

localJson();
render();

