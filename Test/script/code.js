// For Array and default todo item by ?
// Create
let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
    
];

// Add to arrry
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click',() => {
items.push({
            id: items.length + 1,
            item: document.getElementById('input').value,
            createdDate: new Date()
            })
    showData();
    localStorage.setItem('records',JSON.stringify(items));
});

// The Todo list when you add
(function showData() {
    document.getElementById('list').innerHTML = '';
    items.forEach((item,index) => {
    document.getElementById('list').innerHTML += `
        <li id="${index}">
            <input type="checkbox" id="check"><span>${item.item}</span></input>
            <i class="bi bi-trash" onclick="deleteItem(${index})"></i>
        </li>
    `
});
console.table(items);
})();

// Sort button
document.querySelector("#btnSort").addEventListener("click", () => {
    items.sort((a, b) => {
    let fa = a.item.toLowerCase(),
        fb = b.item.toLowerCase();
  
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    loadData();
  });

// Delete
function deleteItem(id) {
    if (id > -1) {
      items.splice(id, 1);
      // Apply the change
      localStorage.setItem('records', JSON.stringify(items));
    }
    loadData();
  }