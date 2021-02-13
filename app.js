

var button = document.getElementById('send');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        var li = document.createElement('li'); 
        var del = document.createElement(
       'button');
        del.innerHTML = 'x'; 
        del.style.float = 'right';
        del.className = 'del';
        del.addEventListener('click', removeMe);
        ul.appendChild(li);
        li.appendChild(del);
        li.appendChild(document.createTextNode(input.value));
        input.value = '';
    } else {
      alert('type something');
    }
    
})
const del = document.querySelectorAll('.del'); 

del.forEach( button => {
  button.addEventListener('click', removeMe); 
});

function removeMe() {
   this.closest('li').remove();
}

