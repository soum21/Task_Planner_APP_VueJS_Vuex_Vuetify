<template>
  <div ref="time-element">
    <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent width="290px">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="time2"
          label="Estimated Time"
          :prepend-icon="getIcon"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker v-if="modal2" format="ampm" v-model="time" full-width>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="saveTime(time)"> OK </v-btn>
      </v-time-picker>
    </v-dialog>
  </div>
</template>
<script>
import { getTimeAmPm } from '../../utils';
export default {
  name: 'TimePicker',
  data() {
    return {
      time: '',
      time2: '',
      menu2: false,
      modal2: false
    };
  },
  props: {
    itemTime: String,
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.itemTime) {
      this.time = this.itemTime;
      this.time2 = this.itemTime;
    }
  },
  computed: {
    getIcon() {
      console.log(this.showIcon);
      if (this.showIcon) return 'mdi-clock-time-four-outline';
      else return '';
    }
  },
  watch: {
    itemTime(curr, prev) {
      if (prev !== curr) {
        this.itemTime = curr;
        this.time2 = this.itemTime;
      }
    }
  },
  updated() {},
  methods: {
    saveTime(time) {
      this.$refs.dialog.save(time);
      const ampm = getTimeAmPm(time);
      const pickedTime = this.time + ampm;
      this.$emit('changeTime', pickedTime);
    }
  }
};
</script>
