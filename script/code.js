// For Array and default todo item by ?
// Create
let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
  // or empty array []
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
          <i class="bi bi-pencil-square" onclick="edit(${item.id})"></i>
          <i class="bi bi-trash" onclick="remove(${index})"></i>
    </div>
    `
});
console.table(items);
};
showData();

// Add to arrry
const btnAdd = document.getElementById('btnAdd');
const input = document.getElementById('input');

btnAdd.addEventListener('click',() => {
items.push({
            id: items.length + 1,
            item: input.value,
            createdDate: new Date()
            })
    showData();
    localStorage.setItem('records',JSON.stringify(items));
    // Enter input
    input.value = '';
    // Focus on input and dont move away from it
    input.focus();
});

// Press enter to add to array instead of mouse click
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      btnAdd.click();
  }
});


// Sort button
const btnSort = document.getElementById('btnSort');
btnSort.addEventListener("click", () => {
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

// Edit button
// let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// // removes 4 first elements and replace them with another
// schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
// console.log(schedule);
// // ["we", "are", "going", "to", "swim", "tommorrow"]

function edit(id){
  const newTask = prompt('What would u change')
  const task = items.find((item) => item.id === id);
  task.item = newTask
  localStorage.setItem('records',JSON.stringify(items));
  showData();
};

