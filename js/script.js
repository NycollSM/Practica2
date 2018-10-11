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
        pendientes.innerHTML += homework.value;
        pendientes.innerHTML += ' - ' + dateHW.value ;
        newText.appendChild(pendientes);
        homework.value = '';
        dateHW.value = '';
    }

    /**Objeto */
    let Datos = {
        task: homework.value,
        dueTime: dateHW.value,
        complete: false,
    }
    //Datos.push = homework.value;
    //Datos.push = dateHW.value;
    console.log(Datos);
}
  
/*Eventos*/
newElement.addEventListener('click', tarea);
