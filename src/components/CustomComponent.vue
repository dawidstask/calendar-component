<script setup lang="ts">
import {ref} from "vue";

const selectedTimeUnit = ref()
const timeUnits = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute']
</script>

<template>
  <div>
    <div>Selected: {{ selectedTimeUnit }}</div>
    <select v-model="selectedTimeUnit">
      <option disabled value="">Please select one</option>
      <option
        v-for="time in timeUnits"
        :key="time"
        :value="time"
      >
        {{ time }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
