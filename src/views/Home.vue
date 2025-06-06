<template>
  <div class="home">
    <h1>番茄时钟</h1>
    <Timer />
  </div>
</template>

<script setup>
import Timer from '../components/Timer.vue'
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #ee0a24;
  margin-bottom: 30px;
}
</style> 