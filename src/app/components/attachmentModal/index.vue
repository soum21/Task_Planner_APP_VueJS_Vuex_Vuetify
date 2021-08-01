<template>
  <v-dialog v-model="modal" width="80%">
    <v-card>
      <v-card-title class="text-h5" :class="setColor"> Attachments </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="ma-5">
          <v-col v-for="(img, index) in attachments" cols="6" md="4" :key="index" class="d-flex justify-center">
            <v-card class="pa-2" outlined tile>
              <v-img
                :ref="'img'"
                max-height="150"
                max-width="150"
                :src="img.base64"
                class="img-fluid"
                :title="'img' + f"
              />
            </v-card>
          </v-col>
        </v-row>

        <v-row class="ma-5">
          <v-col v-for="(file, f) in files" :key="f" cols="6" md="4" class="d-flex justify-center">
            <v-card class="pa-2" outlined tile>
              <v-img
                :ref="'file'"
                max-height="150"
                max-width="150"
                src="//placehold.it/400/99cc77"
                class="img-fluid"
                :title="'file' + f"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row class="ma-3" align="center" justify="center" v-show="doUpload">
          <v-col class="ma-3" cols="12">
            <v-file-input
              accept="image/*"
              label="Select files"
              prepend-icon="photo"
              multiple
              chips
              color="pink"
              v-model="files"
              @change="addFiles"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="buttonColor" color="white" text @click="handleUpload" v-show="doUpload"> Upload </v-btn>
        <v-btn :class="setColor" color="white" text @click="handleClick"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AttachmentModal',
  data() {
    return {
      files: [],
      readers: [],
      uploadFiles: []
    };
  },
  props: {
    modal: Boolean,
    attachments: Array,
    parentId: [Number, String],
    board: String,
    doUpload: {
      type: Boolean,
      default: true
    }
  },
  mounted() {},
  computed: {
    // a computed getter
    setColor: function () {
      let board = this.board.toLowerCase();
      if (board === 'processing') return 'blue lighten-4';
      if (board === 'pending') return 'red lighten-4';
      if (board === 'done') return 'green lighten-4';
      else return 'green lighten-4';
    },
    buttonColor: function () {
      if (this.files.length < 1) {
        return 'grey';
      } else {
        let board = this.board.toLowerCase();
        if (board === 'processing') return 'blue lighten-4';
        if (board === 'pending') return 'red lighten-4';
        if (board === 'done') return 'green lighten-4';
        else return '';
      }
    }
  },
  methods: {
    handleClick() {
      const modal = false;
      this.$emit('toggleModal', modal);
    },
    deletefile(id) {
      const data = {
        fileId: id,
        parentId: parseInt(this.parentId),
        board: this.board
      };
      this.$store.dispatch('deleteFile', data);
    },
    handleUpload() {
      const data = {
        files: this.uploadFiles,
        parentId: parseInt(this.parentId),
        board: this.board
      };
      this.files = [];
      this.$store.dispatch('addFile', data);
    },
    addFiles() {
      this.files.forEach((file, f) => {
        this.readers[f] = new FileReader();
        this.readers[f].onloadend = () => {
          let fileData = this.readers[f].result;
          let imgRef = this.$refs.file[f];
          imgRef.src = fileData;
          let imageRef = {
            name: file.name,
            size: file.size,
            type: file.type,
            base64: fileData
          };
          this.uploadFiles.push(imageRef);
        };
        this.readers[f].readAsDataURL(this.files[f]);
      });
    }
  }
};
</script>
