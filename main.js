"use strict";

var list = document.querySelector('#shopping-list');
var input = document.querySelector('#item');
var addItemButton = document.querySelector('#add-item');
input.focus();

addItemButton.addEventListener('click', function () {
  
  var itemInput;
  input.focus();

  if (input.value != "") {
    itemInput = input.value;

    var listItem = document.createElement('li');
    var text = document.createTextNode(itemInput);
    var deleteItem = document.createElement('button');
    var deleteText = document.createTextNode('Delete');
    
    deleteItem.appendChild(deleteText);
    listItem.appendChild(text);
    listItem.appendChild(deleteItem);
    list.appendChild(listItem);

    // event handler is added to each delete button every time click event fires from add button
    // every button then has it's own click event handler instead of the event handler below
    deleteItem.addEventListener('click', function (e) {
      e.stopPropagation(); //not sure if this is necessary
      list.removeChild(listItem);
      input.focus();
    })

  } else {
    alert('please enter a value');
    return;
  }
  
  // reset input to blank
  if(input.value != "") {
    input.value = "";
    input.focus();
  }
})

// list.addEventListener('click', function (e) {
//   if(e.target.tagName == 'BUTTON') {
//     var itemToRemove = e.target.parentElement;
//     this.removeChild(itemToRemove);
//     input.focus();
//   } else {
//     return;
//   }
// })