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

items.forEach((item,index) => {
    document.getElementById('list').innerHTML += `
                                <li>
                                    <input type="checkbox" id="check">${item.item}
                                    <i class="bi bi-x" id="remove"></i>
                                </li>`
})
// btnAdd.addEventListener('click',() => {
//     items.push(
//         {
//             id: items.length +1,
//             item: document.getElementById('input').value,
//             createdDate: new Data()
//         }
//     )
// })