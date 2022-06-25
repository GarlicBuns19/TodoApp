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

// The Todo list when you add
function showData() {
    document.getElementById('task').innerHTML = '';
    items.forEach((item,index) => {
    document.getElementById('task').innerHTML += `
    <div>
        <input type="checkbox" id="check">
            <span>${item.item}</span>
        <i class="bi bi-trash" onclick="remove(${index})"></i>
    </div>  
    `
});
console.table(items);
};
showData();

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
    showData();
  });

// Delete
function remove(id) {
    if (id > -1) {
      items.splice(id, 1);
      // Apply the change
      localStorage.setItem('records', JSON.stringify(items));
    }
    showData();
  }
// Delete all Task
const btnClear = document.getElementById('btnClear')
btnClear.addEventListener('click', () => {
    localStorage.clear()
    // alert('Refresh page to clear task')
    window.location.reload();
});