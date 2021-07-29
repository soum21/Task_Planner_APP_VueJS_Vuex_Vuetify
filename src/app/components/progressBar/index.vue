<template>
  <v-progress-linear v-model="progressData" color="green lighten-1" height="30">
    <strong>{{ Math.floor(progressData) }}%</strong>
  </v-progress-linear>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progressData: Number
  },
  setup() {}
};
</script>
