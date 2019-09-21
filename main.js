let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', additem);


// add item 

function additem(e) {
  // prevent the default submit event
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // create a new li element
  let li = document.createElement('li');
  // Add class

  li.className = 'list-group-item';
  
  // append the text node with input value
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);
} 