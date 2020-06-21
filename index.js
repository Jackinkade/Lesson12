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
//не надо пользоватся оптимизатором 
//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('\'11 G\';3 x=b.6(".0-K"),c=b.6(".M-E"),g=b.6(".0-L"),h=b.6(".0-9");j 7=[];3 8=4(){g.D="";h.D="";7.J(4(5,t){3 2=b.I("2");2.H.F("0-5");2.N="<z e=\'P-0\'>"+5.a+"</z>"+\'<C e="0-Q">\'+\'<d e="0-p"></d>\'+\'<d e="0-m"></d>\'+\'</C>\';k(5.9){h.u(2)}o{g.u(2)}3 y=2.6(".0-m");y.i("r",4(){5.9=!5.9;8()});3 q=2.6(\'.0-p\');q.i(\'r\',4(){7.O(t,1);8()})});j w=n.R(7);v.S(\'B\',w)};x.i("T",4(A){A.U();k(c.a!==\'\'){3 l={a:c.a,9:V};7.W(l);c.a=\'\';8()}});3 s=4(){j f=v.X(\'B\');k(f===Y){Z}o{7=n.10(f)}};s();8();',62,64,'todo||li|const|function|item|querySelector|todoData|render|completed|value|document|headerInput|button|class|jsonLocalStorage|todoList|todoComleted|addEventListener|let|if|newTodo|complete|JSON|else|remove|btnTodoRemove|click|localJson|strDelete|append|localStorage|myJson|todoControl|btnTodoComlete|span|event|json|div|textContent|input|add|strict|classList|createElement|forEach|control|list|header|innerHTML|splice|text|buttons|stringify|setItem|submit|preventDefault|false|push|getItem|null|return|parse|use'.split('|'),0,{}))

//'use strict';const todoControl=document.querySelector(".todo-control"),headerInput=document.querySelector(".header-input"),todoList=document.querySelector(".todo-list"),todoComleted=document.querySelector(".todo-completed");let todoData=[];const render=function(){todoList.textContent="";todoComleted.textContent="";todoData.forEach(function(item,strDelete){const li=document.createElement("li");li.classList.add("todo-item");li.innerHTML="<span class='text-todo'>"+item.value+"</span>"+'<div class="todo-buttons">'+'<button class="todo-remove"></button>'+'<button class="todo-complete"></button>'+'</div>';if(item.completed){todoComleted.append(li)}else{todoList.append(li)}const btnTodoComlete=li.querySelector(".todo-complete");btnTodoComlete.addEventListener("click",function(){item.completed=!item.completed;render()});const btnTodoRemove=li.querySelector('.todo-remove');btnTodoRemove.addEventListener('click',function(){todoData.splice(strDelete,1);render()})});let myJson=JSON.stringify(todoData);localStorage.setItem('json',myJson)};todoControl.addEventListener("submit",function(event){event.preventDefault();if(headerInput.value!==''){const newTodo={value:headerInput.value,completed:false};todoData.push(newTodo);headerInput.value='';render()}});const localJson=function(){let jsonLocalStorage=localStorage.getItem('json');if(jsonLocalStorage===null){return}else{todoData=JSON.parse(jsonLocalStorage)}};localJson();render();