import TimePicker from '../timePicker';

export default {
  name: 'TaskCard',
  data() {
    return {
      shouldDisplay: false,
      formDisable: true,
      title: '',
      description: '',
      time: '',
      valid: false,
      titleRules: [(v) => !!v || 'Title is required']
    };
  },
  components: {
    TimePicker
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    board: {
      type: String,
      default: null
    }
  },
  mounted() {
    if (this.item === null) {
      this.shouldDisplay = false;
    } else {
      this.title = this.item.title;
      this.description = this.item.description;
      this.time = this.item.estimatedTime ? this.item.estimatedTime : '';
      this.shouldDisplay = true;
    }
  },
  computed: {
    cardHeaderClass() {
      let selected = this.board.toLowerCase();
      if (selected === 'processing') return 'blue lighten-4';
      if (selected === 'pending') return 'red lighten-4';
      if (selected === 'done') return 'green lighten-4';
    },
    buttonClass() {
      return this.valid ? 'success mx-0 mt-3' : 'grey mx-0 mt-3';
    }
  },
  methods: {
    gotoDetail(i) {
      console.log(i);
    },
    doEdit(id) {
      console.log(id);
      this.formDisable = false;
    },
    doDelete(id, board) {
      const data = {
        id: id,
        board: board
      };
      this.$store.dispatch('deleteTask', data);
    },
    submit(id, board) {
      if (this.$refs.form.validate()) {
        const data = {
          id: id,
          board: board,
          title: this.title,
          description: this.description,
          estimatedTime: this.time
        };
        this.$store.dispatch('editTask', data);
        this.formDisable = true;
      }
    },
    resetData() {
      this.title = this.item.title;
      this.description = this.item.description;
      this.time = this.item.estimatedTime;
      this.formDisable = true;
      this.$refs.form.resetValidation();
    },
    changeTime(time) {
      this.time = time;
    },
    cancel() {
      this.resetData();
    }
  }
};
