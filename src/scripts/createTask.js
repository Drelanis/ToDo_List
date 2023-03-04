import { setItem, getItem, getDate, getRandomId } from './storage.js';
import { renderTasks } from './renderer.js';

export const addNewTasks = () => {
  const inputTaskElement = document.querySelector('.task-input');
  const text = inputTaskElement.value;
  if (text === '') {
    return;
  }
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: getDate(),
    id: getRandomId(),
  });

  setItem('tasksList', newTasksList);
  inputTaskElement.value = '';

  renderTasks();
};
