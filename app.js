const agregar= document.querySelector('#btnAgregar');
const tarea= document.querySelector('#tareaInput');
const lista= document.querySelector('#listaTareas');
const completada= document.querySelector('.lista li.completada');

agregar.addEventListener('click', function(event){

    event.preventDefault();

    const tareaValor= tarea.value;
    const error= document.querySelector('#error');
    let li;
    let btnEliminar;

    error.innerHTML= '';

    if(tareaValor.trim() === ''){
        error.innerHTML= 'Por favor, ingresa una tarea';
        setTimeout(function(){
        error.innerHTML= '';
        }, 2000);
        return;
    }else{
        li= document.createElement('li');
        li.textContent= tareaValor;
        lista.appendChild(li);
    }

    btnEliminar= document.createElement('button');
    btnEliminar.textContent= 'Eliminar';

    li.addEventListener('click', () => {
        li.classList.toggle('completada');
    });

    btnEliminar.addEventListener('click', () => {
        lista.removeChild(li);
    });

    li.appendChild(btnEliminar);
});
    
