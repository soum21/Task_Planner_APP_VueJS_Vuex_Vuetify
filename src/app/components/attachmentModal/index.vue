<template>
  <v-dialog v-model="modal" width="80%">
    <v-card>
      <v-card-title class="text-h5" :class="setColor"> Attachments </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col v-for="file in attachments" :key="file.id" cols="6" sm="6">
            <v-card elevation="3" class="justify-center">
              <v-row class="ma-3" align="center" justify="center">
                <v-col cols="6" sm="6">
                  <span :class="$vuetify.breakpoint.xs ? 'text-caption pt-2 px-1' : 'text-h6 pt-2 px-1'"
                    >{{ file.name }}
                  </span>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-btn text icon color="grey darken-1" @click="deletefile(file.id)">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="ma-3" align="center" justify="center">
          <v-col class="ma-3" cols="12">
            <v-file-input
              v-model="files"
              :color="setColor"
              counter
              label="File input"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
              <span class="text-overline grey--text text--darken-3 mx-2"> +{{ files.length - 2 }} File(s) </span>
            </v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="buttonColor" color="white" text @click="handleUpload"> Upload </v-btn>
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
      files: []
    };
  },
  props: {
    modal: Boolean,
    attachments: Array,
    parentId: String,
    board: String
  },
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
        files: this.files,
        parentId: parseInt(this.parentId),
        board: this.board
      };
      this.$store.dispatch('addFile', data);
      this.files = [];
    }
  }
};
</script>
