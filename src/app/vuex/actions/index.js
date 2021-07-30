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
export default { addTask, editTask, deleteTask };
