import TimePicker from '../timePicker';
import AttachmentModal from '../../components/attachmentModal';

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
      titleRules: [(v) => !!v || 'Title is required', (v) => (v && v.length < 20) || 'Maximum 20 charecters'],
      descRules: [(v) => !!v || 'Description is required', (v) => (v && v.length < 150) || 'Maximum 150 charecters'],
      attachments: 0,
      files: [],
      attachMentModal: false
    };
  },
  components: {
    TimePicker,
    AttachmentModal
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    board: {
      type: String,
      default: null
    },
    found: {
      type: Object,
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
      this.attachments = this.item.files.length;
      this.shouldDisplay = true;
      this.files = this.item.files;
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
    },
    getHighlight() {
      if (!this.found) {
        return '';
      } else {
        if (this.found.title === this.title || this.found.description === this.description) {
          return 'yellow lighten-4';
        } else {
          return '';
        }
      }
    }
  },
  methods: {
    gotoDetail(id, board) {
      this.$router.push({ path: `/detail/${board}/${id}` });
    },
    doEdit() {
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
    },
    viewAttachment() {
      this.attachMentModal = true;
    },
    toggleModal() {
      this.attachMentModal = false;
    }
  }
};
