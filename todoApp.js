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
                </div>`;

const sort = document.getElementById('sort');
const search = document.getElementById('search');
const btnAdd = document.getElementById('add');

localStorage.setItem([
    {
    id: 1,
    item: 'TV Stand',
    createdDate: new Date()
    }/*,
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
    }*/
   ]
   )
const tv = localStorage.getItem('TV Stand')

let todoList = []