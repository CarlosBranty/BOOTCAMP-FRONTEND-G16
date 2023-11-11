let tasks = []; // aqui almacenaremos las tareas
const taskInput = document.querySelector(".task__input"); // selecciona el input desde javscript
const taskList = document.querySelector(".task__list"); //seleccion la clase desde javasctip

taskInput.addEventListener("keypress", function (event) {
  // aqui ira la logica de nuestra aplicacion
  if (event.key === "Enter") {
    // console.log("Agregando una nueva tarea")
    const input = event.target;
    const value = input.value;

    const newTask = {
      title: value,
      done: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    // console.log(tasks)
    renderTasks();
  }
});

function checkTask(event, currentIndex){
    // console.log("La tarea fue seleccionada es: ", currentIndex)
    // TODO: Hacer que el todo se tache usando solo javascript
    // const doneText = taskList.querySelectorAll("span")[currentIndex];

    // if(event.target.checked){
    //     doneText.style.textDecoration = "line-through"
    // } else{
    //     doneText.style.textDecoration = "none"
    // }
    const checkboxSelected = event.target
    const liParent = checkboxSelected.parentElement
    liParent.classList.toggle('isChecked')

    const taskSelected = tasks[currentIndex]
    taskSelected.done = !taskSelected.done
    console.log(tasks)
    
}
function removeTask(event, currentIndex){
    // event.target.parentElement.remove();

    const newTasks = tasks.filter((task,index)=>index !== currentIndex);
    tasks = newTasks
    console.log(newTasks)
    renderTasks();
}

function renderTasks() {
  // console.log("Dibujando las tareas")
  let list = "";
  tasks.forEach(function (task, index) {
    // list = list + task.title
    list = list + `<li class="task__item">
    <input type="checkbox" onchange="checkTask(event, ${index})"/>
    <span>${task.title}</span>
    <button onclick="removeTask(event, ${index})">Borrar</button>
</li>`
    
  });

  taskList.innerHTML = list
//   console.log(list)
}
