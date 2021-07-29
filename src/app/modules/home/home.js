import draggable from 'vuedraggable';
import TaskCard from '../../components/taskCard';
import ProgressBar from '../../components/progressBar';
import NoItemsCard from '../../components/noItemsCard';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    draggable,
    TaskCard,
    ProgressBar,
    NoItemsCard
  },

  computed: {
    tasksProcessing: {
      get() {
        return this.$store.getters.processingTasks;
      },
      set(value) {
        return this.$store.dispatch('setProcessingTaskList', value);
      }
    },
    tasksPending: {
      get() {
        return this.$store.getters.pendingTasks;
      },
      set(value) {
        return this.$store.dispatch('setPendingTaskList', value);
      }
    },
    tasksDone: {
      get() {
        return this.$store.getters.doneTasks;
      },
      set(value) {
        return this.$store.dispatch('setDoneTaskList', value);
      }
    },
    totalProgress() {
      return this.$store.getters.getProgressPercent;
    }
  },
  methods: {}
};
