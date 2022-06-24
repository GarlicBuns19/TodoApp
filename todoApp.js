const row = document.querySelector('.row');
const input = document.getElementById('itemToDo');
const btnAddItem = document.getElementById('addItem')
let todoArr = []

todoLayout = () => {
    `<div class="col-md-4"></div>
        <div class="col-md-4">
            <form>
                <input type="text" id="itemToDo">
                <button id="addItem"></button>
            </form>
        </div>
    <div class="col-md-4"></div>`
}

// btnAddItem.addEventListener('click', () => {

// })