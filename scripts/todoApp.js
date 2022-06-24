const row = document.querySelector('.row');
let todoArr = [];

(todoLayout = () => {
        row.innerHTML = `<div class="col-md-12"><h1>Todo App</h1></div>
                        <div class="col-md-12 Input">
                                <input type="text" id="itemToDo">
                                <button id="addItem">Add Item</button>
                        </div>
                        <div class="col-md-12" id="list"></div>`
})();
const input = document.getElementById('itemToDo');
const btnAddItem = document.getElementById('addItem');
const list = document.getElementById('list');

btnAddItem.addEventListener('click', (e) => {
        e = input.value
        todoArr.push(e)
        list.innerHTML += `<div>
                                <input type="checkbox" id="listItem">
                                <label>${e}</label></input>
                                <button id="x">X</button>
                            </div>`
});