<template>
  <div class="timer-container">
    <van-circle
      :current-rate="timerStore.progress" 
      :rate="100"
      :speed="100"
      :stroke-width="60"
      color="#ee0a24"
      layer-color="#ebedf0"
      size="200px"
      class="progress-circle"
    >
      <div class="time-display">{{ timerStore.displayTime }}</div>
    </van-circle>
    <div class="controls">
      <van-button
        type="primary"
        size="large"
        @click="timerStore.isRunning ? timerStore.pauseTimer() : timerStore.startTimer()"
      >
        {{ timerStore.isRunning ? '暂停' : '开始' }}
      </van-button>
      <van-button
        type="default"
        size="large"
        @click="timerStore.resetTimer()"
      >
        重置
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { useTimerStore } from '../store/timerStore'

const timerStore = useTimerStore()
</script>

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.progress-circle {
  margin-bottom: 20px;
}

.time-display {
  font-size: 48px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* 确保在van-circle插槽中垂直居中 */
}

.controls {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; /* 增加按钮间距 */
  width: 100%; /* 使控件容器占满父容器宽度 */
}
</style>