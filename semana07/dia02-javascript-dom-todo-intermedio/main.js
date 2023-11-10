
const tasks = [] // aqui almacenaremos las tareas
const taskInput = document.querySelector('.task__input');// selecciona el input desde javscript
const taskList = document.querySelector('.task__list');//seleccion la clase desde javasctip

taskInput.addEventListener('keypress', function(event){
    // aqui ira la logica de nuestra aplicacion
    if(event.key === "Enter"){
        // console.log("Agregando una nueva tarea")
    }
})