import { getItemInArray, deleteItemFromArray } from '../../utils';

const ADD_TASK = (state, payload) => {
  const newTask = {
    id: payload.id,
    title: payload.title,
    description: payload.description,
    taskBoard: 'pending'
  };
  state.tasks.push(newTask);
};

const SET_PENDING_TASKS_LIST = (state, payload) => {
  state.tasksPending = payload;
};

const SET_PROCESSING_TASKS_LIST = (state, payload) => {
  state.tasksProcessing = payload;
};

const SET_DONE_TASKS_LIST = (state, payload) => {
  state.tasksDone = payload;
};

const EDIT_TASK = (state, payload) => {
  const { id, board, description, estimatedTime, title } = payload;
  if (board === 'processing') {
    let item = getItemInArray(state.tasksProcessing, id);
    if (item) {
      item.title = title;
      item.description = description;
      item.estimatedTime = estimatedTime;
    }
  }
  if (board === 'pending') {
    let item = getItemInArray(state.tasksPending, id);
    if (item) {
      item.title = title;
      item.description = description;
      item.estimatedTime = estimatedTime;
    }
  }
  if (board === 'done') {
    let item = getItemInArray(state.tasksDone, id);
    if (item) {
      item.title = title;
      item.description = description;
      item.estimatedTime = estimatedTime;
    }
  }
};

const DELETE_TASK = (state, payload) => {
  const { id, board } = payload;
  if (board === 'processing') {
    let newArray = deleteItemFromArray(state.tasksProcessing, id);
    state.tasksProcessing = newArray;
  }
  if (board === 'pending') {
    let newArray = deleteItemFromArray(state.tasksPending, id);
    state.tasksPending = newArray;
  }
  if (board === 'done') {
    let newArray = deleteItemFromArray(state.tasksDone, id);
    state.tasksDone = newArray;
  }
};

export default {
  ADD_TASK,
  SET_PENDING_TASKS_LIST,
  SET_PROCESSING_TASKS_LIST,
  SET_DONE_TASKS_LIST,
  EDIT_TASK,
  DELETE_TASK
};
