const getItemInArray = (array, id) => {
  let item = array.find((task) => task.id === id);
  return item;
};

const deleteItemFromArray = (array, id) => {
  let newArray = array.filter((task) => task.id !== id);
  return newArray;
};
export { getItemInArray, deleteItemFromArray };
