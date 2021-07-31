<template lang="">
  <v-container>
    <div v-show="comments.length > 0">
      <div v-for="comment in comments" :key="comment.id">
        <SingleComment :comment="comment" />
      </div>
    </div>
    <v-row class="mb-3" align="center">
      <v-col cols="6" sm="6" class="d-flex justify-end">
        <v-text-field label="Add a comment" v-model="comment" @keyup.enter="handleComment"></v-text-field>
      </v-col>
      <v-col cols="6" sm="6" class="d-flex justify-start">
        <v-btn text icon color="blue" @click.prevent="handleComment" :disabled="!comment">
          <v-icon x-large>mdi-send</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SingleComment from '../singleComment';
export default {
  name: 'Comments',
  data() {
    return {
      comment: ''
    };
  },
  props: {
    comments: Array
  },
  components: {
    SingleComment
  },
  methods: {
    handleComment() {
      this.$emit('handleComment', this.comment);
      this.comment = '';
    }
  }
};
</script>
