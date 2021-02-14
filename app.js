const button = document.getElementById('send');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        const li = document.createElement('li'); 
        const del = document.createElement(
       'button');
        del.innerHTML = 'x'; 
        del.style.float = 'right';
        del.className = 'del btn btn-light btn-sm';
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