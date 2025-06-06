import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    timeLeft: 25 * 60, // 25分钟，以秒为单位
    isRunning: false,
    totalTime: 25 * 60,
    timerId: null
  }),
  
  getters: {
    progress: (state) => {
      return ((state.totalTime - state.timeLeft) / state.totalTime) * 100
    },
    displayTime: (state) => {
      const minutes = Math.floor(state.timeLeft / 60)
      const seconds = state.timeLeft % 60
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  },
  
  actions: {
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true
        this.timerId = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--
          } else {
            this.stopTimer()
            // 播放提示音
            const audio = new Audio('/alarm.mp3')
            audio.play()
          }
        }, 1000)
      }
    },
    
    pauseTimer() {
      this.isRunning = false
      if (this.timerId) {
        clearInterval(this.timerId)
        this.timerId = null
      }
    },
    
    resetTimer() {
      this.pauseTimer()
      this.timeLeft = this.totalTime
    }
  }
}) 