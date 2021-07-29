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

export default { ADD_TASK, SET_PENDING_TASKS_LIST, SET_PROCESSING_TASKS_LIST, SET_DONE_TASKS_LIST };
