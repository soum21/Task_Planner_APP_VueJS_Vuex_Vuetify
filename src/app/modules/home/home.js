import draggable from 'vuedraggable';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    draggable
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
