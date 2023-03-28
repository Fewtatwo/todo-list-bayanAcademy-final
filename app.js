
const header = document.getElementById('user-header');

function auth() {
    let currentUser = document.getElementById('user-name').value;
    localStorage.setItem('user', currentUser);
    return false;
}

/* All Todo-List Page functions */
const todoList = document.getElementById('main-list');
const doneList = document.getElementById('done-list');
const lis = document.querySelectorAll('li');
const inputForm = document.querySelector('#input-form');


const addTodo = todo => {
    const newTodo = document.createElement('li');
    newTodo.append(todo);
    todoList.append(newTodo);
};

const addDone = done => {
    const newDone = document.createElement('li');
    newDone.append(done);
    doneList.append(newDone);
}

inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const todoInput = inputForm.elements.todoinput;
    addTodo(todoInput.value);
    inputForm.reset();
});

todoList.addEventListener('click', function(e) {
    let toDone = e.target.innerText;
    addDone(toDone);
    e.target.nodeName === 'LI' && e.target.remove();
});

function getUser() {
    header.innerText = `${localStorage.getItem('user')}'s Todo List` 
}

function logOut() {
    localStorage.clear('user');
}