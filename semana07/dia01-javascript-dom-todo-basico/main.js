// const taskInput = document.querySelector('.task__input');
const taskAdd = document.querySelector('.task__add');
const taskInput = document.getElementById('taskInputId');
const taskList = document.querySelector('.task__list');
taskAdd.addEventListener('click', function(event){
   
    if(taskInput.value === ''){
        alert('El campo es requerido')
        return
    }

    const li = document.createElement('li');
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')

    li.appendChild(checkBox)
    
    const span = document.createElement('span')
    span.textContent = taskInput.value

    li.appendChild(span)

    // TDO: a;adir un bton al li conn el texto Borrar y al jhacer click en el boton que se elimine la fila de la tarea

    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar"
    li.appendChild(btnBorrar);
    // li.textContent = taskInput.value
    taskList.appendChild(li)

    taskInput.value = ''
})

taskList.addEventListener('click', function(event){
    console.log(event)
    const target = event.target;

    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('completed')
    }
    else if(target.tagName === 'BUTTON'){
        target.parentElement.remove();
    }
})

/*
taskAdd.addEventListener('click', function(event){
    // Se ejecutara cuando hagamos en el boton "A'adir Tarea"
    
    // const button = document.createElement('button');
    // button.textContent = 'Raaa';
    // document.body.appendChild(button)

    const li = document.createElement('li');
    li.textContent = taskInput.value
    taskList.appendChild(li)

    taskInput.value = ''
})*/