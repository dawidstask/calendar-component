<script setup lang="ts">
import {computed, ref} from "vue";

defineProps({
  selectOptions: Array,
})

const selectedTimeUnit = ref()
const timeUnits = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute']
const isTimeUnit = computed(() => timeUnits.includes(selectedTimeUnit.value))
</script>

<template>
  <div>
    {{isTimeUnit}}
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
      <option value="t">ttt</option>
    </select>
  </div>
</template>

<style scoped>

</style>
