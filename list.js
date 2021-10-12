const createTask = document.querySelector('#criar-tarefa');
const clearAll = document.querySelector('#apaga-tudo');
const removeAllFinal = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
// const moveUp = document.querySelector('#mover-cima');
// const moveDown = document.querySelector('#mover-baixo');
const newTask = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('ol'); 
const list = document.getElementsByTagName('li');

function alertButton() {
  document.querySelector('#criar-tarefa').onclick = function () {
    if (document.querySelector('.task input').value.length === 0) {
      alert('Adicione uma tarefa!');
    }
  };  
}
alertButton();

function createNewTask() {
  if (inputTask.value === '') {
    return null;
  }

  const createLisTask = document.createElement('li');
  createLisTask.innerHTML = inputTask.value;
  createLisTask.classList.add('tarefa');
  newTask.appendChild(createLisTask);
  inputTask.value = '';
}

createTask.addEventListener('click', createNewTask);

function backgroundGray() {
  listaOrdenada.addEventListener('click', (event) => {
    for (let i = 0; i < list.length; i += 1) {
      const listGray = list[i];
      listGray.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}
backgroundGray();

function completed(event) {
  const riscaTask = event.target;
  if (riscaTask.classList.contains('completed')) {
    riscaTask.classList.remove('completed');
  } else {
    riscaTask.classList.add('completed');
  }
}
newTask.addEventListener('dblclick', completed);

function clearTask() {
  newTask.innerHTML = '';
}
clearAll.addEventListener('click', clearTask);

function removeFinalizados(){
  const fim = document.getElementsByClassName('completed');
  for (let index = 0; index < fim.length; index += 1) {
    fim[index].remove();     
  }
}
removeAllFinal.addEventListener('click', removeFinalizados);

function saveAllTask() {
  const taskSave = newTask.innerHTML;
  localStorage.setItem('save' , taskSave); 
}
saveTasks.addEventListener('click', saveAllTask);

function saveLocal() {
  const saveNew = localStorage.getItem('save');
  if (saveNew !== null);
  newTask.innerHTML = saveNew;
}
saveLocal();


let removeSelected = document.querySelector('#remover-selecionado');
removeSelected.addEventListener('click', function (event) {
  for (let index = 0; index < list.length; index += 1) {
    if(list[index].style.backgroundColor === 'rgb(128, 128, 128)'){
      list[index].remove()
    }

  }
})
