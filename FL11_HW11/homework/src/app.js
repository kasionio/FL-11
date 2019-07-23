let rootNode = document.getElementById('root');

let placeholder = document.getElementById('userinput');
let ul = document.querySelector('ul');
let addButton = document.getElementById('addButton');

function addNewElement() {
  if (placeholder.value.length === 0) {
    addButton.disabled;
  } else {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.insertAdjacentHTML('afterend', '<li draggable="true" disable="" onclick="Disabled()"><input type="checkbox">' +
      '<span>' + placeholder.value + '<a onclick="Edit()"</span><i class="material-icons edit"> edit</i></a>' +
      '<a onclick="Delete()"><i class="material-icons delete"> delete</i></a>');
    placeholder.value = '';
  }
}

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function Delete() {
  ul.removeChild(ul.firstChild);
}

function Disabled() {
  document.getElementsByTagName('li').disabled = true;
}

function Edit() {
 document.getElementsByTagName('li').Edit;
}