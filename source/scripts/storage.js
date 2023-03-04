const storage = {};

export const getRandomId = () => (Math.random() * 10000).toFixed();

export const getDate = () => new Date();

// export const setItem = (key, value) => {
//   Object.assign(storage, { [key]: value });
// };

// export const getItem = key => storage[key];

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));
