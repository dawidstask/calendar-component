<script setup lang="ts">
import CustomComponent from '@/components/CustomComponent.vue'
const selectOptions = [
  'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute',
  'date from-to', 'date-from', 'date-to'
]
</script>

<template>
  <main>
    <h1>Calendar component</h1>
    <CustomComponent
      :selectOptions="selectOptions"
    />
  </main>
</template>

<style scoped>

</style>
