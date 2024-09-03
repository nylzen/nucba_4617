/*
Queremos armar una lista de tareas
Ingresar datos en un input ( tarea )
Queremos obtener lo que se escribio en el input CUANDO se mande el formulario ('submit')
Renderizar ( mostrar ) lo que mandamos por el input
IMPORTANTE: Las tareas las vamos a guardar en un array✅

Validaciones (si existe la tarea y si el input esta vacio) ✅
Borrar tareas ✅
Borrar todas las tareas ✅
-- TODO: LocalStorage ✅

*/

// 1. Definir las variables de los elementos HTML necesarios
const taskInput = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector('.deleteAll-btn')

// Guardamos las tareas
let tasksList = JSON.parse(localStorage.getItem('tasks')) || []

const saveLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasksList))
}

// Funcion para retornar el HTML
const createTaskHTML = (task) => {
  return `
  <li>
    ${task.name}
    <img src='./img/delete.svg'
    class='delete-btn'
    data-id="${task.id}"
    />
  </li>
  `;
};

// Funcion para renderizar las tareas
const renderTaskList = () => {
  tasksContainer.innerHTML = tasksList
    .map((task) => createTaskHTML(task))
    .join("");

  // tasksContainer.innerHTML = tasksList.map(task => {
  //   return `
  //     <li>
  //   ${task.name}
  //   <img src='./img/delete.svg'
  //   class='delete-btn'
  //   data-id="${task.id}"
  //   />
  // </li>
  //   `
  // })
};

//  Funcion para validar la tarea
const isValidTask = (taskName) => {
  let isValid = true;

  if (!taskName.length) {
    alert("Ingresa una tarea, rey");
    isValid = false;
  } else if (tasksList.some((task) => task.name === taskName)) {
    alert("La tarea ya existe");
    isValid = false;
  }

  return isValid;
};

const toggleDeleteAllBtn = () => {
  if(tasksList.length < 2){
    deleteAllBtn.classList.add('hidden')
    return
  }

  deleteAllBtn.classList.remove('hidden')
}

const addTask = (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim();

  // TODO: refactorizar en una funcion que valide si esta vacio o si existe la tarea
  if (isValidTask(taskName)) {
    tasksList = [...tasksList, { name: taskName, id: Date.now() }];
    addForm.reset();
    renderTaskList();
    saveLocalStorage()
    toggleDeleteAllBtn()
    // console.log(tasksList)
  }
};

const removeTask = (e) => {
  if (!e.target.classList.contains("delete-btn")) return;
  // console.log(e.target)
  const taskId = Number(e.target.dataset.id);
  // console.log('antes',tasksList)
  tasksList = tasksList.filter((task) => task.id !== taskId);
  // console.log('despues',tasksList)
  renderTaskList();
  saveLocalStorage()
  toggleDeleteAllBtn()
};


const removeAll = () => {
  tasksList = []
  renderTaskList()
  saveLocalStorage()
  toggleDeleteAllBtn()
}

// Funcion inicializadora
const init = () => {
  document.addEventListener('DOMContentLoaded', renderTaskList)
  addForm.addEventListener("submit", addTask);
  tasksContainer.addEventListener("click", removeTask);
  deleteAllBtn.addEventListener('click', removeAll)
  document.addEventListener('DOMContentLoaded', toggleDeleteAllBtn)
};

init();
