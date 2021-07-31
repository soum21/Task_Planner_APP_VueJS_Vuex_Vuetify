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
  deleteItemFromArray(totalArray.tasks, id);
};

const DELETE_FILE = (state, payload) => {
  const { board, parentId, fileId } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let item = getItemInArray(totalArray.tasks, parentId);
  deleteItemFromArray(item.files, fileId);
};

const ADD_FILE = (state, payload) => {
  const { files, parentId, board } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let item = getItemInArray(totalArray.tasks, parentId);
  files.forEach((file) => {
    item.files.push(file);
  });
};

const ADD_COMMENT = (state, payload) => {
  const { comment, parentId, board } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let item = getItemInArray(totalArray.tasks, parentId);
  let lastElement = item.comments[item.comments.length - 1];
  if (lastElement) {
    const id = lastElement.id + 1;
    let data = {
      id: id,
      text: comment
    };
    item.comments.push(data);
  } else {
    let data = {
      id: 1,
      text: comment
    };
    item.comments.push(data);
  }
};

export default {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  DELETE_FILE,
  ADD_FILE,
  ADD_COMMENT
};
