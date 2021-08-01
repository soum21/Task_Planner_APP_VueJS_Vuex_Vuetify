import { getItemInArray, deleteItemFromArray, getItemByName, sortArray } from '../../utils';

const ADD_TASK = (state, payload) => {
  const { description, estimatedTime, title, board, files } = payload;
  // const { board } = payload;
  const totalArray = getItemByName(state.taskList, board);
  let lastElement = totalArray.tasks[totalArray.tasks.length - 1];
  console.log(lastElement);
  if (lastElement) {
    const lastId = lastElement.id;
    const id = lastId + 1 + Math.random() * 100;
    let data = {
      id: id,
      title: title,
      description: description,
      estimatedTime: estimatedTime,
      files: files,
      comments: []
    };
    totalArray.tasks.push(data);
  } else {
    let data = {
      id: 1,
      title: title,
      description: description,
      estimatedTime: estimatedTime,
      files: files,
      comments: []
    };
    totalArray.tasks.push(data);
  }
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

const SORT_LIST = (state, payload) => {
  if (payload === 'Processing') {
    const totalProcessingList = getItemByName(state.taskList, 'Processing');
    sortArray(totalProcessingList.tasks);
  }
  if (payload === 'Pending') {
    const totalPendingList = getItemByName(state.taskList, 'Pending');
    sortArray(totalPendingList.tasks);
  }
  if (payload === 'Done') {
    const totalDoneList = getItemByName(state.taskList, 'Done');
    sortArray(totalDoneList.tasks);
  }
};

export default {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  DELETE_FILE,
  ADD_FILE,
  ADD_COMMENT,
  SORT_LIST
};
