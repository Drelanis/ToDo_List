// const listElement = document.querySelector('.list');
// // const inputTaskElement = document.querySelector('.task-input');
// const buttonElement = document.querySelector('.create-task-btn');

// const storage = {};

// export const setItem = (key, value) => {
//   Object.assign(storage, { [key]: value });
// };

// export const getItem = key => storage[key];

// const getRandomId = () => (Math.random() * 10000).toFixed();

// const getDate = () => new Date();

// export const createCheckboxElement = (done, id) => {
//   const checkboxElement = document.createElement('input');
//   checkboxElement.classList.add('list__item-checkbox');
//   checkboxElement.setAttribute('type', 'checkbox');
//   checkboxElement.setAttribute('data-id', id);
//   checkboxElement.checked = done;
//   return checkboxElement;
// };

// export const renderTasks = () => {
//   const listElement = document.querySelector('.list');
//   listElement.innerHTML = '';
//   const tasksElems = (getItem('tasksList') || [])
//     .sort((first, second) => first.done - second.done || second.date - first.date)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       const checkboxElement = createCheckboxElement(done, id);
//       listItemElem.append(checkboxElement, text);
//       return listItemElem;
//     });
//   listElement.append(...tasksElems);
// };

// export const tasksToDo = event => {
//   if (event.target.getAttribute('type') !== 'checkbox') {
//     return;
//   }
//   Object.assign(
//     (getItem('tasksList') || []).find(({ id }) => id === event.target.getAttribute('data-id')),
//     { done: event.target.checked, date: getDate() },
//   );
//   renderTasks();
// };

// export const addNewTasks = () => {
//   const inputTaskElement = document.querySelector('.task-input');
//   const text = inputTaskElement.value;
//   if (text === '') {
//     return;
//   }
//   const tasksList = getItem('tasksList') || [];

//   const newTasksList = tasksList.concat({
//     text,
//     done: false,
//     createDate: getDate(),
//     id: getRandomId(),
//   });

//   setItem('tasksList', newTasksList);
//   inputTaskElement.value = '';

//   renderTasks();
// };

// listElement.addEventListener('click', tasksToDo);
// buttonElement.addEventListener('click', addNewTasks);
