import { getItemByName } from '../../utils';

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
  return {
    progressPercentage,
    pendingBarProgress,
    processingBarProgress,
    doneBarProgress,
    processingTaskPercentage,
    pendingTaskPercentage
  };
};

const getAllTasks = (state) => {
  return state.taskList;
};

export default {
  getProgressPercent,
  getAllTasks
};
