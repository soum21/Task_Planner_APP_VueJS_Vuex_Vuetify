import AttachmentModal from '../../components/attachmentModal';
import Comments from '../../components/comments';
export default {
  name: 'Detail',
  data() {
    return {
      time: '',
      files: [],
      comments: [],
      valid: false,
      detailData: [],
      modal: false,
      title: '',
      description: '',
      viewEditOption: true,
      checked: false,
      updateState: false,
      deleteDialog: false
    };
  },
  components: {
    AttachmentModal,
    Comments
  },
  mounted() {
    const { board, id } = this.$route.params;
    const data = {
      board: board,
      id: parseInt(id)
    };
    this.detailData = this.$store.getters.getDetails(data);
    this.title = this.detailData.title;
    this.description = this.detailData.description;
    this.files = this.detailData.files;
    this.comments = this.detailData.comments;
  },
  computed: {
    cardHeaderClass() {
      const { board } = this.$route.params;
      let selected = board.toLowerCase();
      if (selected === 'processing') return 'blue lighten-4';
      if (selected === 'pending') return 'red lighten-4';
      if (selected === 'done') return 'green lighten-4';
    }
  },
  methods: {
    openAttachmentModal() {
      this.modal = true;
    },
    displayEditOption() {
      this.viewEditOption = !this.viewEditOption;
    },
    toggleModal(data) {
      this.modal = data;
    },
    save() {
      const { board, id } = this.$route.params;
      const data = {
        id: parseInt(id),
        board: board,
        title: this.title,
        description: this.description,
        estimatedTime: this.detailData.estimatedTime
      };
      this.$store.dispatch('editTask', data);
      this.viewEditOption = !this.viewEditOption;
      this.checked = !this.checked;
      this.updateState = true;
      console.log(this.files);
    },
    cancel() {
      this.title = this.detailData.title;
      this.description = this.detailData.description;
      this.viewEditOption = !this.viewEditOption;
      this.checked = !this.checked;
    },
    doDelete() {
      const { board, id } = this.$route.params;
      const data = {
        id: parseInt(id),
        board: board
      };
      this.$store.dispatch('deleteTask', data);
      this.deleteDialog = false;
      this.$router.go(-1);
    },
    handleComment(comment) {
      console.log(comment);
      const { board, id } = this.$route.params;
      const data = {
        comment: comment,
        parentId: parseInt(id),
        board: board
      };
      this.$store.dispatch('addComment', data);
    }
  }
};
