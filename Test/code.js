// For Array and default todo item by ?
let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
    
];