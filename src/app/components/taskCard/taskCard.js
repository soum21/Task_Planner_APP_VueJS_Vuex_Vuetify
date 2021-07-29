export default {
  name: 'TaskCard',
  data() {
    return {
      shouldDisplay: false,
      formDisable: true
    };
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
      this.shouldDisplay = true;
    }
  },
  watch: {
    item: function (newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
    }
  },
  computed: {
    cardHeaderClass() {
      let selected = this.board;
      if (selected === 'processing') return 'red lighten-4';
      if (selected === 'pending') return 'blue lighten-4';
      if (selected === 'done') return 'green lighten-4';
    },
    cardHeaderText() {
      let selected = this.board;
      if (selected === 'processing') return 'Task';
      if (selected === 'pending') return 'Pending';
      if (selected === 'done') return 'Done';
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
    doDelete(event) {
      event.preventDefault();
      console.log(event.target);
    },
    submit(id, board) {
      console.log(id, board);
      console.log(this.item.title, this.item.description);
    }
  }
};
