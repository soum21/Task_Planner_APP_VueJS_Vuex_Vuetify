import draggable from 'vuedraggable';
import TaskCard from '../../components/taskCard';
import ProgressBar from '../../components/progressBar';
import NoItemsCard from '../../components/noItemsCard';
import AddTaskModal from '../../components/addTaskModal';

export default {
  name: 'Home',
  data() {
    return {
      taskPercent: 0,
      pendingPercent: 0,
      processingPercent: 0,
      search: '',
      items: [],
      allTasks: [],
      found: null,
      addTaskModal: false
    };
  },
  components: {
    draggable,
    TaskCard,
    ProgressBar,
    NoItemsCard,
    AddTaskModal
  },
  mounted() {
    this.items = this.$store.getters.getAllTasks;
    this.items.forEach((item) => {
      item.tasks.forEach((i) => {
        this.allTasks.push(i);
      });
    });
  },
  computed: {
    taskList: {
      get() {
        this.item = this.$store.getters.getAllTasks;
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
    },
    handleChange() {
      let found = this.allTasks.filter((task) => task.title === this.search || task.description === this.search);
      this.found = found[0];
      return this.found;
    }
  },
  methods: {
    sortList(name) {
      this.$store.dispatch('sortList', name);
    },
    addTask() {
      this.addTaskModal = true;
    },
    toggleModal() {
      this.addTaskModal = false;
    }
  }
};
