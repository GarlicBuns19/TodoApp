const row = document.querySelector('.row');
row.innerHTML = `<div class="col-md-3">
                    <button id="sort">Sort By</button>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3">
                    <input type="text" id="search" placeholder="Enter your item">
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3">
                    <button id="add">Add item</button>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4" id="items"></div>`;

/*localStorage.setItem([
    {
    id: 1,
    item: 'TV Stand',
    createdDate: new Date()
    },
    {
    id: 2,
    item: 'Phone',
    createdDate: new Date()
    },
    {
    id: 3,
    item: 'Bread',
    createdDate: new Date()
    },
    {
    id: 4,
    item: 'Coffee',
    createdDate: new Date()
    },
    {
    id: 5,
    item: 'Bricks',
    createdDate: new Date()
    }
   ]
   )*/
const tv = localStorage.getItem('TV Stand')

const todoList = []

const sort = document.getElementById('sort');
const search = document.getElementById('search');
const items = document.getElementById('items');
const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', () => {
    let i = todoList.length
    todoList[i] = parseInt(search.value)
    if(i >= 1){
        items.innerHTML += ', '
    }
    items.innerHTML += todoList[i];
    i++;
})