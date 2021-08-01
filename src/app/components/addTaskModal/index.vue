<template lang="">
  <v-dialog v-model="showModal" width="80%">
    <v-card>
      <v-card-title class="text-h5 blue lighten-2"> Add Task </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row class="ma-3" align="center" justify="center">
          <v-col class="ma-3" cols="12">
            <v-text-field label="Title" v-model="title" hide-details="auto" prepend-icon="mdi-pin"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ma-3" align="center" justify="center">
          <v-col class="ma-3" cols="12">
            <v-textarea label="Description" v-model="description" rows="4" prepend-icon="mdi-text"></v-textarea>
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
            <v-select menu-props="auto" label="Select" hide-details prepend-icon="mdi-map" single-line></v-select>
          </v-col>
        </v-row>
        <v-row class="ma-3" align="center" justify="center">
          <v-col cols="4">
            <v-subheader>Add Tags</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-autocomplete outlined dense chips small-chips label="Outlined" multiple></v-autocomplete>
          </v-col>
        </v-row>
        <v-row v-show="files.length > 0">
          <v-col v-for="file in files" :key="file.id" cols="6" sm="6">
            <v-card elevation="3" class="justify-center">
              <v-row class="ma-3" align="center" justify="center">
                <v-col cols="6" sm="6">
                  <span :class="$vuetify.breakpoint.xs ? 'text-caption pt-2 px-1' : 'text-h6 pt-2 px-1'"
                    >{{ file.name }}
                  </span>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-btn text icon color="grey darken-1">
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
      files: [],
      title: '',
      description: '',
      time: '',
      showIcon: true
    };
  },
  props: {
    showModal: Boolean
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
    },
    changeTime(time) {
      this.time = time;
      if (!this.time) {
        this.isTimeEmpty = true;
      }
      console.log(time);
    },
    submit() {}
  }
};
</script>
<style lang=""></style>
