const model = (storageKey, view) => {
  let data = JSON.parse(localStorage.getItem(storageKey)) || [];
  view(data);
  return {
    add: item => {
      data = [...data, item];
      view(data);
      localStorage.setItem(storageKey, JSON.stringify(data))
    },
    remove: id => {
      data = data.filter(item => item.id !== id);
      view(data);
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }
};
const view = (root, callback) => modelData => {
  root.innerHTML = callback(modelData);
};
const app = () => {
  const listElement = document.querySelector('.list-container');
  const formElement = document.querySelector('.form-container');
  const inputElement = document.querySelector('.input');
  
  const todosView = view(listElement, todos => todos.length 
    ? `<ul>${todos.map(({ data, id }) => `<li class="box list-item" data-id="${id}">${data}</li>`).reduce((acc, curr) => acc += curr,'')}</ul>` 
    : '<p>There is no notes, add new one.</p>' 
  );
  const todosModel = model('todos', todosView);
  const addTodoController = event => todosModel.remove(Number.parseInt(event.target.dataset.id, 10));
  const removeTodoController = event => {
    event.preventDefault();
    if (!!inputElement.value.length) {
      todosModel.add({ data: inputElement.value, id: Date.now() });
      inputElement.value = '';
    }
  };
  
  listElement.addEventListener('click', addTodoController);
  formElement.addEventListener('submit', removeTodoController);
};

document.addEventListener('DOMContentLoaded', app)