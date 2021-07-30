<template>
  <v-progress-linear v-model="progressData" color="green lighten-1" height="30">
    <strong>{{ Math.floor(progressData) }}% (Done {{ totalDone }} out of {{ totalTask }})</strong>
  </v-progress-linear>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progressData: Number,
    totalDone: String,
    totalTask: String
  },
  setup() {}
};
</script>
