const doneTasks = (state) => {
  return state.tasksDone;
};

const pendingTasks = (state) => {
  return state.tasksPending;
};

const processingTasks = (state) => {
  return state.tasksProcessing;
};

const pendingBarDetails = (state) => {
  const totalPending = state.tasksPending.length;
  const totalTasks = state.tasksDone.concat(state.tasksProcessing, state.tasksPending).length;
  const details = `${totalPending}/${totalTasks}`;
  return details;
};

const processingBarDetails = (state) => {
  const totalProcessing = state.tasksProcessing.length;
  const totalTasks = state.tasksDone.concat(state.tasksProcessing, state.tasksPending).length;
  const details = `${totalProcessing}/${totalTasks}`;
  return details;
};

const doneBarDetails = (state) => {
  const totalDone = state.tasksDone.length;
  const totalTasks = state.tasksDone.concat(state.tasksProcessing, state.tasksPending).length;
  const details = `${totalDone}/${totalTasks}`;
  return details;
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
  getProgressPercent,
  pendingBarDetails,
  doneBarDetails,
  processingBarDetails
};
