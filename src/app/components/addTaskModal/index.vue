<template lang="">
  <v-dialog v-model="showModal" width="80%">
    <v-card>
      <v-card-title class="text-h5 blue lighten-2"> Add Task </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form class="px-1" v-model="valid" ref="form">
          <v-row class="ma-3" align="center" justify="center">
            <v-col class="ma-3" cols="12">
              <v-text-field
                label="Title"
                v-model="title"
                hide-details="auto"
                prepend-icon="mdi-pin"
                :rules="titleRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="ma-3" align="center" justify="center">
            <v-col class="ma-3" cols="12">
              <v-textarea
                label="Description"
                v-model="description"
                rows="4"
                prepend-icon="mdi-text"
                :rules="descRules"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="ma-3" align="center" justify="center">
            <v-col class="ma-3" cols="12">
              <TimePicker @changeTime="changeTime($event)" :itemTime="time" :showIcon="showIcon" />
            </v-col>
          </v-row>
          <v-row class="ma-3" align="center" justify="center">
            <v-col cols="4">
              <v-subheader>Select Board</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select
                :items="boards"
                v-model="board"
                label="Choose Board"
                item-text="label"
                :rules="selectRules"
                bottom
                autocomplete
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row v-show="files.length > 0">
            <v-col v-for="(file, f) in files" :key="f" cols="4" sm="4">
              <v-img
                :ref="'file'"
                max-height="150"
                max-width="150"
                src="//placehold.it/400/99cc77"
                class="img-fluid"
                :title="'file' + f"
              />
            </v-col>
          </v-row>
          <v-row class="ma-3" align="center" justify="center">
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
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center mb-6">
        <v-spacer></v-spacer>
        <v-btn class="blue lighten-2" x-large color="white" text @click="submit"> Submit </v-btn>
        <v-btn class="red lighten-2" x-large color="white" text @click="toggleModal"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import TimePicker from '../../components/timePicker';
export default {
  name: 'AddTaskModal',
  components: {
    TimePicker
  },
  data() {
    return {
      title: '',
      description: '',
      files: [],
      readers: [],
      uploadFiles: [],
      board: '',
      boards: [
        {
          label: 'Pending',
          value: 'Pending'
        },
        {
          label: 'Processing',
          value: 'Processing'
        },
        {
          label: 'Done',
          value: 'Done'
        }
      ],
      time: '',
      showIcon: true,
      titleRules: [(v) => !!v || 'Title is required', (v) => (v && v.length < 20) || 'Maximum 20 charecters'],
      descRules: [(v) => !!v || 'Description is required', (v) => (v && v.length < 150) || 'Maximum 150 charecters'],
      selectRules: [(v) => !!v || 'Board is required'],
      valid: false
    };
  },
  props: {
    showModal: Boolean
  },
  methods: {
    toggleModal() {
      this.resetState();
      this.$emit('toggleModal');
    },
    changeTime(time) {
      this.time = time;
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
    },
    resetState() {
      this.board = '';
      this.title = '';
      this.description = '';
      this.time = '';
      this.files = '';
      this.uploadFile = '';
    },
    submit() {
      if (this.$refs.form.validate()) {
        const data = {
          board: this.board,
          title: this.title,
          description: this.description,
          estimatedTime: this.time,
          files: this.uploadFiles
        };
        this.$store.dispatch('addTask', data);
        this.resetState();
        this.$emit('toggleModal');
      }
    }
  }
};
</script>
<style lang=""></style>
