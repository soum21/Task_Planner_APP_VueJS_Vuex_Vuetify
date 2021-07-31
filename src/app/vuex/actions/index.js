import * as types from '../actionTypes';
const addTask = (context, payload) => {
  context.commit(types.ADD_TASK, payload);
};

const editTask = (context, payload) => {
  context.commit(types.EDIT_TASK, payload);
};

const deleteTask = (context, payload) => {
  context.commit(types.DELETE_TASK, payload);
};

const deleteFile = (context, payload) => {
  context.commit(types.DELETE_FILE, payload);
};

const addFile = (context, payload) => {
  context.commit(types.ADD_FILE, payload);
};

const addComment = (context, payload) => {
  context.commit(types.ADD_COMMENT, payload);
};
export default { addTask, editTask, deleteTask, deleteFile, addFile, addComment };
