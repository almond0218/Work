<template lang="html">
  <div class="content-wrapper">
    <div class="content-wrapper__content content">
      <b-button class="content__button" size="lg" variant="primary" @click="start">출근</b-button>
      <b-button class="content__button" size="lg" @click="end">퇴근</b-button>
    </div>

    <h1>주간근무시간: {{ weeklyWorkTime }}</h1>
    <h1>근무시간: {{ dailyWorkTime }}</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getDailyWork')
    this.$store.dispatch('getUser')
  },
  computed: {
    dailyWorkTime () {
      return this.$store.state.dailyWork.workTime.split('.')[0]
    },
    weeklyWorkTime () {
      return this.$store.state.dailyWork.weeklyWork.workTime.split('.')[0]
    },
  },
  methods: {
    start () {
      this.$store.dispatch('startWork')
    },
    end () {
      this.$store.dispatch('endWork')
    },
  },
}
</script>

<style lang="css" scoped>
.content-wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-wrapper__content {
  width: 200px;

  display: flex;
  justify-content: space-around;
}
</style>
