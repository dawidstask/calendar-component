<script setup lang="ts">
import {ref} from "vue";

const timeUnit = ref()
</script>

<template>
  <div>
    <div>Selected: {{ timeUnit }}</div>
    <select v-model="timeUnit">
      <option disabled value="">Please select one</option>
      <option>year</option>
      <option>quarter</option>
      <option>month</option>
    </select>
  </div>
</template>

<style scoped>

</style>
