import draggable from 'vuedraggable';
import TaskCard from '../../components/taskCard';
import ProgressBar from '../../components/progressBar';
import NoItemsCard from '../../components/noItemsCard';

export default {
  name: 'Home',
  data() {
    return {
      taskPercent: 0,
      pendingPercent: 0,
      processingPercent: 0,
      options: {
        dropzoneSelector: '.drag-inner-list',
        draggableSelector: '.drag-item'
      }
    };
  },
  components: {
    draggable,
    TaskCard,
    ProgressBar,
    NoItemsCard
  },
  computed: {
    taskList: {
      get() {
        return this.$store.getters.getAllTasks;
      },
      set(value) {
        console.log(value);
      }
    },
    totalProgress() {
      this.taskPercent = Math.floor(this.$store.getters.getProgressPercent.progressPercentage);
      this.pendingPercent = Math.floor(this.$store.getters.getProgressPercent.pendingTaskPercentage);
      this.processingPercent = Math.floor(this.$store.getters.getProgressPercent.processingTaskPercentage);
      return this.$store.getters.getProgressPercent;
    }
  },
  methods: {}
};
