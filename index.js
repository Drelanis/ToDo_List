const getRandomId = () => (Math.random() * 10000).toFixed();

const tasks = [
  { text: 'Buy milk', done: false, id: getRandomId() },
  { text: 'Pick up Tom from airport', done: false, id: getRandomId() },
  { text: 'Visit party', done: false, id: getRandomId() },
  { text: 'Visit doctor', done: true, id: getRandomId() },
  { text: 'Buy meat', done: true, id: getRandomId() },
];

const LIST_ELEMENT = document.querySelector('.list');
const INPUT_TASK_ELEMENT = document.querySelector('.task-input');

const renderTasks = (tasksList) => {
  LIST_ELEMENT.innerHTML = '';
  const tasksElems = tasksList
    .sort((first, second) => first.done - second.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      const checkbox = document.createElement('input');
      listItemElem.classList.add('list__item');
      checkbox.classList.add('list__item-checkbox');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  LIST_ELEMENT.append(...tasksElems);
};
renderTasks(tasks);

const tasksToDo = (event) => {
  if (event.target.getAttribute('type') !== 'checkbox') {
    return;
  }
  Object.assign(
    tasks.find(({ id }) => id === event.target.getAttribute('data-id')),
    { done: event.target.checked }
  );
  renderTasks(tasks);
};

const addNewTasks = () => {
  if (INPUT_TASK_ELEMENT.value === '') {
    return;
  }
  tasks.push({
    text: `${INPUT_TASK_ELEMENT.value}`,
    done: false,
    id: getRandomId(),
  });
  renderTasks(tasks);
};

LIST_ELEMENT.addEventListener('click', tasksToDo);
document
  .querySelector('.create-task-btn')
  .addEventListener('click', addNewTasks);
