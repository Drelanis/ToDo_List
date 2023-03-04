import { getItem, getDate, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const tasksToDo = event => {
  if (event.target.getAttribute('type') !== 'checkbox') {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === event.target.dataset.id) {
      return { ...task, done: event.target.checked, createDate: getDate() };
    }
    return task;
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
