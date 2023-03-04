import { createCheckboxElement } from './createCheckbox.js';
import { getItem } from './storage.js';

export const renderTasks = () => {
  const listElement = document.querySelector('.list');
  listElement.innerHTML = '';
  const tasksElems = (getItem('tasksList') || [])
    .sort((first, second) => first.done - second.done || second.date - first.date)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElement = createCheckboxElement(done, id);
      listItemElem.append(checkboxElement, text);
      return listItemElem;
    });
  listElement.append(...tasksElems);
};
