<script setup lang="ts">
import CustomComponent from '@/components/CustomComponent.vue'
import {ref} from "vue";
const selectOptions = [
  'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute',
  'date from-to', 'date-from', 'date-to'
]
const minDate = '2020-01-01'
const maxDate = '2025-01-01'
const result = ref()

const onUpdate = (val) => {
  result.value = val
}
</script>

<template>
  <main>
    <h1>Calendar component</h1>
    <CustomComponent
      :selectOptions="selectOptions"
      :minDate="minDate"
      :maxDate="maxDate"
      @update="onUpdate"
    />
    <p>Result:</p>
    <pre>{{result}}</pre>
  </main>
</template>

