<template lang="">
  <v-row class="ma-5">
    <v-card class="ma-1">
      <v-list one-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon large color="blue darken-2"> mdi-message-text </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ comment.text }}</v-list-item-title>
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
