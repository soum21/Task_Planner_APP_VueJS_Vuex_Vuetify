<template lang="">
  <v-row class="ma-1">
    <v-card class="ma-1">
      <v-list one-line>
        <v-list-item>
          <v-list-item-avatar class="mb-6">
            <v-icon color="blue darken-2"> mdi-message-text </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <span class="text-body mb-6 text-center">
              {{ comment.text }}
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-row>
</template>
<script>
export default {
  name: 'SingleComment',
  props: {
    comment: Object
  }
};
</script>
<style scoped></style>
