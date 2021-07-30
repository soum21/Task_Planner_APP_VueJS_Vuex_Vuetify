import { getItemInArray, deleteItemFromArray, getItemByName } from '../../utils';

const ADD_TASK = (state, payload) => {
  const newTask = {
    id: payload.id,
    title: payload.title,
    description: payload.description,
    taskBoard: 'pending'
  };
  state.tasks.push(newTask);
};

const EDIT_TASK = (state, payload) => {
  const { id, board, description, estimatedTime, title } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let item = getItemInArray(totalArray.tasks, id);
  if (item) {
    item.title = title;
    item.description = description;
    item.estimatedTime = estimatedTime;
  }
};

const DELETE_TASK = (state, payload) => {
  const { id, board } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let newArray = deleteItemFromArray(totalArray.tasks, id);
  totalArray.tasks = newArray;
};

export default {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK
};
