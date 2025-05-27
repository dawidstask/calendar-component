<script setup lang="ts">
import { computed, ref } from "vue";

defineProps({
  selectOptions: Array,
})

const selectedTimeUnit = ref()
const inputValue = ref()

const timeUnits = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute']
const datesFrom = ['date from-to', 'date-from']
const datesTo = ['date from-to', 'date-to']

const isTimeUnit = computed(() => timeUnits.includes(selectedTimeUnit.value))
const isDateFrom = computed(() => datesFrom.includes(selectedTimeUnit.value))
const isDateTo = computed(() => datesTo.includes(selectedTimeUnit.value))
</script>

<template>
  <div>
    <select v-model="selectedTimeUnit">
      <option disabled value="">Please select one</option>
      <option
        v-for="item in selectOptions"
        :key="item"
        :value="item"
      >
        {{ item }}
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


    DF: {{isDateFrom}} - DT: {{isDateTo}}
  </div>
</template>

<style scoped>

</style>
