import { getItemByName, getItemInArray } from '../../utils';

const getProgressPercent = (state) => {
  const totalDoneList = getItemByName(state.taskList, 'Done');
  const totalPendingList = getItemByName(state.taskList, 'Pending');
  const totalProcessingList = getItemByName(state.taskList, 'Processing');

  const totalDoneTask = totalDoneList.tasks.length;
  const totalPendinTask = totalPendingList.tasks.length;
  const totalProcessingTask = totalProcessingList.tasks.length;
  const totalTask = totalDoneTask + totalPendinTask + totalProcessingTask;

  const progressPercentage = (totalDoneTask / totalTask) * 100;
  const processingTaskPercentage = (totalProcessingTask / totalTask) * 100;
  const pendingTaskPercentage = (totalPendinTask / totalTask) * 100;

  const pendingBarProgress = `${totalPendinTask}/${totalTask}`;
  const processingBarProgress = `${totalProcessingTask}/${totalTask}`;
  const doneBarProgress = `${totalDoneTask}/${totalTask}`;

  const totalTaskString = totalTask.toString();
  const totalDoneString = totalDoneTask.toString();

  return {
    progressPercentage,
    pendingBarProgress,
    processingBarProgress,
    doneBarProgress,
    processingTaskPercentage,
    pendingTaskPercentage,
    totalTaskString,
    totalDoneString
  };
};

const getAllTasks = (state) => {
  return state.taskList;
};

const getDetails =
  (state) =>
  ({ board, id }) => {
    const totalArray = getItemByName(state.taskList, board);
    let item = getItemInArray(totalArray.tasks, id);
    return item;
  };

export default {
  getProgressPercent,
  getAllTasks,
  getDetails
};
