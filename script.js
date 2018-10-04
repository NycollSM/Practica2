let homework = document.getElementById('new-homework');
let newElement = document.getElementsByTagName('button');
let newText = document.getElementById('list');



    newElement.addEventListener('click', function add(){
        let newPending = newText.value;
        newText.createElement('li');
        newText.appendChild(newPending); 
    });
    
