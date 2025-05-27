<script setup lang="ts">
import {computed, ref, watch} from "vue";

defineProps({
  selectOptions: Array<string>,
  disabledOptions: Array<string>,
  min: Number,
  max: Number,
  minDate: String,
  maxDate: String
})
const emit = defineEmits(['update'])

const selectedTimeUnit = ref()
const inputValue = ref()
const dateFrom = ref()
const dateTo = ref()

const timeUnits = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute']
const datesFrom = ['date from-to', 'date-from']
const datesTo = ['date from-to', 'date-to']

const isTimeUnit = computed(() => timeUnits.includes(selectedTimeUnit.value))
const isDateFrom = computed(() => datesFrom.includes(selectedTimeUnit.value))
const isDateTo = computed(() => datesTo.includes(selectedTimeUnit.value))

watch(
  [selectedTimeUnit, inputValue, dateFrom, dateTo],
  () =>
  {
    const output = {
      timeUnit: selectedTimeUnit.value,
      value: isTimeUnit.value ? parseInt(inputValue.value) || null : null,
      from: isDateFrom.value ? dateFrom.value : null,
      to: isDateTo.value ? dateTo.value : null
    }
    emit('update', output)
  }
)
</script>

<template>
  <div>
    <select v-model="selectedTimeUnit">
      <option disabled value="">Please select one</option>
      <option
        v-for="item in selectOptions"
        :key="item"
        :value="item"
        :disabled="disabledOptions?.includes(item)"
      >
        {{ item }}
      </option>
    </select>

    <div v-if="isTimeUnit">
      <input
        type="number"
        v-model="inputValue"
        :min="min"
        :max="max"
        placeholder="Enter value"
        style="min-width: 100px"
      />
      {{ selectedTimeUnit }}(s)
    </div>

    <div v-if="isDateFrom">
      <label>Date from:</label>
      <input
        type="date"
        v-model="dateFrom"
        :min="minDate"
        :max="maxDate"
      />
    </div>

    <div v-if="isDateTo">
      <label>Date to:</label>
      <input
        type="date"
        v-model="dateTo"
        :min="minDate"
        :max="maxDate"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
