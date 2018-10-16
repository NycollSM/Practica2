let homework = document.getElementById('new-homework');
let newElement = document.querySelector('button');
let newText = document.getElementById('list');
let dateHW = document.getElementById('date');

   /**Funcion */
function tarea(){ 
    /**enviar error si no hay texto */
    if (homework.value, dateHW.value == 0){
            console.log('error');
            alert('escribe tu tarea');
    }else{  
        /**Elemntos agregados a la DOM*/  
        let pendientes = document.createElement('li');
        let confirmation = document.createElement('input');
        confirmation.setAttribute('type', 'checkbox');
        pendientes.innerHTML += homework.value;
        pendientes.innerHTML += ' - ' + dateHW.value ;
        newText.appendChild(pendientes);
        pendientes.appendChild(confirmation);
        const Datos = [];
        Datos.push({taskaName: homework.value , dueDate: dateHW.value, Complete: false});
        console.log(Datos);
    }
    homework.value = '';
    dateHW.value = '';

}
  
/*Eventos*/
newElement.addEventListener('click', tarea);
