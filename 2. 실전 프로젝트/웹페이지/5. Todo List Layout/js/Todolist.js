const todoform = document.querySelector("#todoform");
const todoInput = document.querySelector("#todoform input");
const todoList_ul = document.querySelector("#todolist");
const curDate_p = document.querySelector("#cur_date");

todoform.addEventListener("submit", handleTodoSubmit);

let DBLists = [];
let CurrentDate;
const DBLIST_KEY = "DBLISTS";

function TodoList(date) {
    this.date = date;
    this.todos = [];//list 삽입.
}

function clearTodoItems() {
    console.log("clearTodoItems is called");

    while (todoList_ul.firstChild) {
        todoList_ul.removeChild(todoList_ul.firstChild);
    }
}
function displayTodoItem(item) {
    console.log("DisplayToDoItem is called");

    const todo_cur_li = document.createElement("li");
    const todo_cur_span = document.createElement("span");
    const todo_remove_btn = document.createElement("button");

    todo_cur_span.innerText = item;
    todo_remove_btn.innerText = "X";

    todo_cur_li.appendChild(todo_cur_span)
    todo_cur_li.appendChild(todo_remove_btn);

    todoList_ul.appendChild(todo_cur_li);
    /*Item이 curtodo가 된다. */
}
function loadCurrentTodo() {
    console.log("loadcurrentTOdo is called");
    const savedDBLists = localStorage.getItem(DBLIST_KEY);
    if (savedDBLists !== null) {
        DBLists = JSON.parse(savedDBLists)
    }
    console.log(DBLists)

    if (!DBLists) {
        return
    }
}
function handleTodoSubmit(parm) {
    console.log("handleTodoSubmit is called");
    parm.preventDefault();
    const curTodo = todoInput.value;
    console.log("todoInput value : " + curTodo);

    todoInput.value = "";

    displayTodoItem(curTodo);
    addNewTodo(CurrentDate, curTodo);
    //save localstorage code
    saveDBListInLocalStorage();
}
function setCurrentDate(date) {
    console.log("setCurrentDate -" + date);
    curDate_p.textContent = date + "일정";
    CurrentDate = date;
}
function addNewTodo(date, newTodo) {
    console.log("addNewTodo is called");

    let curTodoList = DBLists.find(list => list.date === date);
    //curTodoList = []
    if (!curTodoList) {
        curTodoList = new TodoList(date);
        DBLists.push(curTodoList);
    }
    curTodoList.todos.push(newTodo);
    //DBLists.push(curTodoList);

    //DBLists.push(JSON.stringify(curTodoList));
}
function saveDBListInLocalStorage() {
    console.log("saveDBListInLocalStorage is called");
    localStorage.setItem(DBLIST_KEY, JSON.stringify(DBLists));
}

function loadTodoInit() {
    console.log("loadTodoInit is called");

    //날짜 가져와서 초기화해주는 부분.
    var today = new Date();
    var formattedToday = today.toISOString().split('T')[0];
    console.log(formattedToday);
    setCurrentDate(formattedToday);

    //DBLists 가져와서 초기화 해주는 부분.
    const savedDBLists = localStorage.getItem(DBLIST_KEY);

    if (savedDBLists !== null) {
        DBLists = JSON.parse(savedDBLists);
    }
    console.log(DBLists);

    //DBList 화면에 출력하기.
    if (!DBLists) {
        return /* 다음 줄 작업 없이 종료. */
    }

    DBLists.forEach(tlist => {
        if (tlist.date === CurrentDate) {
            tlist.todos.forEach(displayTodoItem)
        }
    })
}