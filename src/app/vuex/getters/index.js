const doneTasks = (state) => {
  return state.tasksDone;
};

const pendingTasks = (state) => {
  return state.tasksPending;
};

const processingTasks = (state) => {
  return state.tasksProcessing;
};

const getProgressPercent = (state) => {
  const totalDone = state.tasksDone.length;
  const totalTasks = state.tasksDone.concat(state.tasksProcessing, state.tasksPending).length;
  const progressPercentage = (totalDone / totalTasks) * 100;
  return progressPercentage;
};
export default {
  doneTasks,
  pendingTasks,
  processingTasks,
  getProgressPercent
};
