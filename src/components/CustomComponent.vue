<script setup lang="ts">
import {computed, ref} from "vue";

defineProps({
  selectOptions: Array,
})

const selectedTimeUnit = ref()
const inputValue = ref()

const timeUnits = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute']
const isTimeUnit = computed(() => timeUnits.includes(selectedTimeUnit.value))
</script>

<template>
  <div>
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

    <div v-if="isTimeUnit">
      <input
        type="number"
        v-model="inputValue"
        placeholder="Enter value"
      />
      {{ selectedTimeUnit }}(s)
    </div>
  </div>
</template>

<style scoped>

</style>
