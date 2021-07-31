const getItemInArray = (array, id) => {
  let item = array.find((task) => task.id === id);
  return item;
};

const deleteItemFromArray = (array, id) => {
  let index = array.map((file) => file.id).indexOf(id);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

const getItemByName = (array, name) => {
  let item = array.find((task) => task.name === name);
  return item;
};

const sortArray = (array) => {
  array.sort((a, b) => b.id - a.id);
};
export { getItemInArray, deleteItemFromArray, getItemByName, sortArray };
