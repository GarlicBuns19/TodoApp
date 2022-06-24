const row = document.querySelector('.row');
const input = document.getElementById('itemToDo');
const btnAddItem = document.getElementById('addItem');
const list = document.getElementById('list');
let todoArr = [];

(todoLayout = () => {
    row.innerHTML = `<div class="col-md-4"></div>
                        <div class="col-md-4">
                                <input type="text" id="itemToDo">
                                <button id="addItem">Add Item</button>
                        </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                        <div class="col-md-4" id="list"></div>`
})();

btnAddItem.addEventListener('click', () => {
    todoArr.push(input.value)
    list.innerHTML = todoArr
});