import * as types from '../actionTypes';
const addTask = (context, payload) => {
  context.commit(types.ADD_TASK, payload);
};

const setPendingTaskList = (context, payload) => {
  context.commit(types.SET_PENDING_TASKS_LIST, payload);
};

const setProcessingTaskList = (context, payload) => {
  context.commit(types.SET_PROCESSING_TASKS_LIST, payload);
};

const setDoneTaskList = (context, payload) => {
  context.commit(types.SET_DONE_TASKS_LIST, payload);
};
export default { addTask, setPendingTaskList, setProcessingTaskList, setDoneTaskList };
