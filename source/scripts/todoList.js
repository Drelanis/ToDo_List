import { addNewTasks } from './createTask.js';
import { tasksToDo } from './updateTask.js';

export const initTodoListHandlers = () => {
  const buttonElement = document.querySelector('.create-task-btn');
  buttonElement.addEventListener('click', addNewTasks);

  const listElement = document.querySelector('.list');
  listElement.addEventListener('click', tasksToDo);
};
