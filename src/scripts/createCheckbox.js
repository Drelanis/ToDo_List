export const createCheckboxElement = (done, id) => {
  const checkboxElement = document.createElement('input');
  checkboxElement.classList.add('list__item-checkbox');
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.setAttribute('data-id', id);
  checkboxElement.checked = done;
  return checkboxElement;
};
