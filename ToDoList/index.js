// Used to track id for delete and update
id = 0;

function addTodo(input) {
    // Create elements for toodo
    var newDiv = document.createAttribute('div');
    var newLi = document.createAttribute('li');
    var newDelete = document.createAttribute('button');
    var newComplete = document.createAttribute('button');
}

newLi.setAttribute('class', 'text');
// Set value of new elements
newDelete.innerHTML = 'X';
// Unicode for checkmark
newComplete.innerHTML = '&#x2713';
// Add event listener
newDelete.addEventListener('click', deleteTodo);
newComplete.addEventListener('click', completeTodo);
// Get text from input
var input = document.getElementById('newTodo');
newLi.textContent= input.nodeValue;
newDiv.setAttribute('id', id);
// Increments ID
id++;
// Console.log(id);

// Gets ol eement so we can append new items
ol = document.getElementById('todoList');
// Appends new div
ol.appendChild(newDiv);
// Appends text and buttons to newDiv
newDiv.appendChild(newLi);
newDiv.appendChild(newComplete);
newDiv.appendChild(newDelete);

// Sets class for newDiv
newDiv.setAttribute('class', 'todoListItem');
item = document.getElementById(id);
ol.removeChild(item);

// Clears input
input.value = "";

function deleteTodo(){
    console.log('delete');
    var id = this.parentElement.id;
    console.log('parent ')
}
