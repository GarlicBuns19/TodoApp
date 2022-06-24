// const row = document.querySelector('.row');
// const input = document.getElementById('itemToDo');
// const btnAddItem = document.getElementById('addItem');
// const list = document.getElementById('list');
const row = document.querySelector('.row');
let todoArr = [];

(todoLayout = () => {
    row.innerHTML = `<div class="col-md-4"></div>
                        <div class="col-md-4">
                                <input type="text" id="itemToDo">
                                <button id="addItem">Add Item</button>
                        </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                        <div class="col-md-4"><ul id="list"></ul></div>`
})();
const input = document.getElementById('itemToDo');
const btnAddItem = document.getElementById('addItem');
const list = document.getElementById('list');

btnAddItem.addEventListener('click', (e) => {
        e = input.value
        todoArr.push(e)
        list.innerHTML += `<li>${e}</li>`
});